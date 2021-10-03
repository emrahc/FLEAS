import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Fire(props: SvgProps) {
  return (
    <Svg width={28} height={34} fill="none" {...props}>
      <Path
        d="M.461 16.582s1.344 1.973 4.16 3.643c0 0-2.04-17.232 11.245-20.225-3.403 12.492 4.33 16.015 7.15 9.415 4.707 6.286 1.133 11.77 1.133 11.77 1.93.278 3.551-1.831 3.551-1.831.015.26.023.521.023.785C27.723 27.794 21.517 34 13.862 34 6.205 34 0 27.794 0 20.139c0-1.23.161-2.422.461-3.557z"
        fill="#FF6536"
      />
      <Path
        d="M27.7 19.354s-1.621 2.109-3.551 1.83c0 0 3.574-5.483-1.134-11.769-2.819 6.6-10.552 3.077-7.148-9.415a14.9 14.9 0 00-2.005.599V34c7.655 0 13.861-6.206 13.861-13.861 0-.264-.008-.526-.022-.785z"
        fill="#FF421D"
      />
      <Path
        d="M7.782 27.92a6.08 6.08 0 1010.14-4.524c-2.351 3.193-5.7-1.65-3.09-5.188 0 0-7.05.884-7.05 9.713z"
        fill="#FBBF00"
      />
      <Path
        d="M19.94 27.92c0-1.796-.779-3.411-2.019-4.524-2.35 3.193-5.7-1.65-3.09-5.188 0 0-.382.048-.97.234V34a6.08 6.08 0 006.08-6.08z"
        fill="#FFA900"
      />
    </Svg>
  );
}

export default Fire;