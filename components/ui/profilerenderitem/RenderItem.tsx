import React, { Dispatch, SetStateAction } from "react";
import {
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const numColumns = 3;
interface RenderItemProps {
  item: {
    analysisId: string;
    imagePath: string;
  };
  setLoading: (arg: Boolean) => void;
  handleAnalysis: (analysisId: number, imagePath: string) => Promise<void>;
  selectMode: Boolean;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
  selectPhoto: (analysisId: number, command: string) => Promise<void>;
}
export const RenderItem = ({
  item,
  setLoading,
  handleAnalysis,
  selectMode,
  setSelectMode,
  selectPhoto,
}: RenderItemProps) => {
  const [selected, setSelected] = React.useState(false);
  React.useEffect(() => {
    setSelected(false);
  }, [selectMode]);

  const press = () => {
    if (selectMode) {
      if (selected) {
        setSelected(false);
        selectPhoto(item.analysisId, "remove");
      }
      if (!selected) {
        setSelected(true);
        selectPhoto(item.analysisId, "add");
      }
    }
    if (!selectMode) {
      setLoading(true);
      handleAnalysis(item.analysisId, item.imagePath);
    }
  };
  const longPress = () => {
    setSelectMode(!selectMode);

    selectPhoto(null, "zero");
  };
  return (
    <TouchableHighlight
      onPress={() => press()}
      onLongPress={() => longPress()}
      style={{ flex: 1 / numColumns }}
    >
      <ImageBackground
        source={{ uri: item.imagePath }}
        style={{
          aspectRatio: 1,
          borderRadius: 1,
          borderColor: selectMode ? (selected ? "red" : "black") : "white",
          borderWidth: selectMode ? 6 : 1,
        }}
        resizeMode="cover"
      >
        {selected && selectMode && (
          <TouchableWithoutFeedback
            style={{
              flex: 1,
              backgroundColor: "green",
            }}
            onPress={() => press()}
            onLongPress={() => longPress()}
          >
            <AntDesign
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.493)",
                flex: 1,
                alignSelf: "stretch",
              }}
              suppressHighlighting={true}
              name="checkcircle"
              size={widthPercentageToDP(10)}
              color="#f82727"
            />
          </TouchableWithoutFeedback>
        )}
      </ImageBackground>
    </TouchableHighlight>
  );
};
