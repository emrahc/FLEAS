import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { widthToPercentage } from "../../constants/Layout";

function MatchMaking({ w = 20, ...props }) {
  const vWidth = 62;
  const vHeight = 62;
  const width = widthToPercentage(w);
  const height = (width * vHeight) / vWidth;
  return (
    <Svg
      fill="none"
      width={width}
      height={height}
      viewBox={[0, 0, vWidth, vHeight].join(" ")}
      {...props}
    >
      <Path
        d="M56.467 62H32.592l-4.428-14.952h21.594a6.48 6.48 0 016.392 5.417l1.185 8.538a.877.877 0 01-.868.997z"
        fill="#FE99A0"
      />
      <Path
        d="M56.15 52.465a6.48 6.48 0 00-6.392-5.417h-2.895a6.48 6.48 0 016.392 5.417l1.203 8.53A.934.934 0 0153.86 62h2.607c.532 0 .941-.47.868-.997l-1.185-8.538z"
        fill="#FD8087"
      />
      <Path
        d="M.882 62L0 61.003l1.239-10.094a6.322 6.322 0 016.274-5.552h.902l7.82 2.823 7.819-2.823h.902c1.652 0 3.168.636 4.303 1.69a6.306 6.306 0 011.972 3.862L32.59 62H.883z"
        fill="#A6E7F0"
      />
      <Path
        d="M16.235 57.694a.936.936 0 01-.936-.935v-6.804a.936.936 0 111.871 0v6.804a.936.936 0 01-.935.935zM31.231 50.91a6.305 6.305 0 00-1.972-3.862 6.306 6.306 0 00-4.303-1.691H22.06c1.652 0 3.169.636 4.303 1.69a6.306 6.306 0 011.973 3.862L29.696 62h2.896L31.23 50.91z"
        fill="#6BD9E7"
      />
      <Path
        d="M42.567 52.114a3.975 3.975 0 01-3.975-3.975v-7.032h7.95v7.032a3.975 3.975 0 01-3.975 3.975z"
        fill="#FFE5C2"
      />
      <Path
        d="M43.646 41.107v7.032a3.975 3.975 0 01-2.527 3.702 3.975 3.975 0 005.422-3.701v-7.033h-2.895z"
        fill="#FED2A4"
      />
      <Path
        d="M53.625 43.519H31.593a1.97 1.97 0 01-1.971-1.971v-15.37a5.96 5.96 0 015.96-5.96h6.731c7.336 0 13.283 5.948 13.283 13.283v8.047a1.97 1.97 0 01-1.97 1.97z"
        fill="#FFE177"
      />
      <Path
        d="M42.313 20.219h-2.895c7.336 0 13.283 5.947 13.283 13.282v8.047a1.97 1.97 0 01-1.971 1.97h2.895a1.97 1.97 0 001.971-1.97V33.5c0-7.335-5.947-13.282-13.282-13.282z"
        fill="#FFD15B"
      />
      <Path
        d="M42.567 44.446a8 8 0 01-8-8v-8.132c0-.329.383-.509.636-.299l2.735 2.276a7.717 7.717 0 003.41 1.63l8.54 1.722c.395.08.68.427.68.83v1.973a8 8 0 01-8.001 8z"
        fill="#FFE5C2"
      />
      <Path
        d="M41.347 31.922a7.717 7.717 0 01-3.409-1.631l-2.735-2.276a.388.388 0 00-.636.299v1.58l.476.397a7.717 7.717 0 003.409 1.63l8.54 1.722c.395.08.68.427.68.83v1.973a8 8 0 01-6.553 7.867 8 8 0 009.448-7.867v-1.973a.847.847 0 00-.68-.83l-8.54-1.721z"
        fill="#FED2A4"
      />
      <Path
        d="M12.26 45.357H8.415l3.609 7.253a1.18 1.18 0 001.987.2l2.224-2.855V48.18l-3.975-2.823z"
        fill="#978ECB"
      />
      <Path
        d="M12.26 45.357H10.8l3 3.47a.822.822 0 01.026 1.042l-1.809 2.323c-.04.052-.085.098-.131.141l.138.277a1.18 1.18 0 001.987.2l2.224-2.855V48.18l-3.975-2.823z"
        fill="#8379C1"
      />
      <Path
        d="M20.21 45.357l-3.975 2.823v1.775l2.138 2.803a1.18 1.18 0 001.989-.178l3.692-7.223H20.21z"
        fill="#978ECB"
      />
      <Path
        d="M21.744 45.357l-3.376 6.605c-.08.155-.187.282-.311.382l.316.414a1.18 1.18 0 001.989-.178l3.692-7.223h-2.31z"
        fill="#8379C1"
      />
      <Path
        d="M36.02 1.962A3.27 3.27 0 0032.002.164l-2.414.792a1.101 1.101 0 01-.686 0L26.488.164a3.27 3.27 0 00-4.017 1.798 3.37 3.37 0 00.71 3.737l5.288 5.262a1.1 1.1 0 001.553 0L35.309 5.7a3.37 3.37 0 00.71-3.737z"
        fill="#FD4755"
      />
      <Path
        d="M36.02 1.962A3.27 3.27 0 0032.002.164l-.471.154c.69.328 1.266.896 1.593 1.644a3.37 3.37 0 01-.71 3.737l-4.199 4.179c-.154.153-.342.25-.54.294l.794.79a1.1 1.1 0 001.553 0l5.287-5.263a3.37 3.37 0 00.71-3.737z"
        fill="#FB2B3A"
      />
      <Path
        d="M42.566 40.35a2.96 2.96 0 01-2.106-.873 2.95 2.95 0 01-.816-1.536.936.936 0 011.838-.352 1.1 1.1 0 001.084.89c.529 0 .986-.376 1.087-.893a.935.935 0 111.837.358 2.982 2.982 0 01-2.924 2.406z"
        fill="#FED2A4"
      />
      <Path
        d="M44.291 11.629h-1.098V10.53a.936.936 0 10-1.871 0v1.099h-1.099a.936.936 0 100 1.871h1.099V14.6a.936.936 0 101.87 0V13.5h1.1a.935.935 0 100-1.871z"
        fill="#FD4755"
      />
      <Path
        d="M47.964 6.905a.956.956 0 100-1.912.956.956 0 000 1.912z"
        fill="#FB2B3A"
      />
      <Path
        d="M20.21 45.358l-3.975 4.597-3.975-4.597v-7.95h7.95v7.95z"
        fill="#FFBD86"
      />
      <Path
        d="M17.314 37.408v7.31c0 .413-.148.811-.418 1.123l-2.109 2.44 1.448 1.674 3.974-4.598v-7.949h-2.895z"
        fill="#F6A96C"
      />
      <Path
        d="M25.239 26.64v7.537a6.57 6.57 0 01-6.57 6.57h-4.868a6.57 6.57 0 01-6.57-6.57V26.64l8.992-2.308 6.12 1.567 2.896.741z"
        fill="#FFBD86"
      />
      <Path
        d="M25.239 26.64v7.538a6.57 6.57 0 01-6.57 6.569h-2.895a6.57 6.57 0 006.57-6.57V25.9l2.895.741z"
        fill="#F6A96C"
      />
      <Path
        d="M7.23 26.64h18.01v-5.792a5.577 5.577 0 00-5.578-5.577H6.773a2.42 2.42 0 00-2.419 2.42v2.743c0 1.043.293 2.065.845 2.95L7.23 26.64z"
        fill="#7A6D79"
      />
      <Path
        d="M19.662 15.271h-2.896a5.577 5.577 0 015.578 5.577v5.792h2.895v-5.792a5.577 5.577 0 00-5.577-5.577z"
        fill="#685E68"
      />
      <Path
        d="M16.222 37.23a3.69 3.69 0 01-2.625-1.087 3.674 3.674 0 01-1.017-1.914.936.936 0 011.838-.352c.068.356.242.682.502.942a1.842 1.842 0 003.11-.946.935.935 0 111.836.359 3.717 3.717 0 01-3.644 2.998z"
        fill="#F6A96C"
      />
    </Svg>
  );
}

export default MatchMaking;