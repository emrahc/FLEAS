import React, { useReducer } from "react";
type Dispatch = (action: (arg0: string) => void) => void;

export default (
  reducer: any,
  action: Function,
  defaultValue: object
) => {
  const Context = React.createContext<Dispatch | undefined>(
    undefined
  );

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      defaultValue
    );

    let boundActions = {};

    for (let key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context: Context, Provider: Provider };
};
