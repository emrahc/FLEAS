import React, { Component } from "react";
import { Dimensions } from "react-native";

import { SvgXml } from "react-native-svg";

const { width } = Dimensions.get("window");
export default function SvgComponent() {
  const svgMarkup = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="332" height="384" viewBox="0 0 332 384" fill="none" version="1.1" id="svg104" sodipodi:docname="faceyourself1.svg" inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)">
  <metadata id="metadata108">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1024" id="namedview106" showgrid="false" inkscape:zoom="1.6848958" inkscape:cx="166" inkscape:cy="192" inkscape:window-x="0" inkscape:window-y="28" inkscape:window-maximized="1" inkscape:current-layer="g92" />
  <g clip-path="url(#clip0)" id="g94">
    <g clip-path="url(#clip1)" id="g92">
      <path d="M315.052 33.7289C309.393 18.2017 297.829 4.39978 281.591 0.456359C251.82 -2.00827 236.32 5.6321 221.065 20.4199C205.811 35.2077 196.953 55.4177 188.342 75.1348C179.731 94.8519 170.627 114.815 154.881 129.357C128.063 154.25 86.728 158.193 60.4018 183.579C34.3217 208.965 30.3851 252.589 46.8697 285.122C63.6003 317.655 97.5537 339.097 133.475 345.752C145.039 347.97 157.095 348.709 168.905 347.231C203.35 342.548 232.875 316.916 248.622 285.861C264.368 254.807 268.059 218.577 266.336 183.825C265.352 166.819 263.384 148.827 270.519 133.3C284.297 102.492 319.727 91.8943 318.989 53.1996C318.743 46.7915 317.266 40.137 315.052 33.7289Z" fill="#FAF9FF" id="path56" />
      <path d="M132.809 4.98083C119.809 -2.61917 103.809 -1.01917 91.1094 6.38083C84.8094 9.98083 79.3094 14.9808 75.3094 20.8808C71.4094 26.4808 68.8094 32.8808 66.2094 39.0808C63.6094 45.4808 61.1094 51.8808 57.5094 57.7808C53.9094 63.7808 48.8094 69.5808 42.0094 71.7808C37.9094 73.1808 33.6094 73.4808 29.5094 74.6808C26.5094 75.4808 23.7094 76.6808 21.0094 78.1808C15.1094 81.2808 9.6094 85.4808 5.30942 90.6808C1.30942 95.4808 -1.79058 101.281 -1.99058 107.681C-2.19058 114.081 0.80942 120.581 5.60942 124.681C14.9094 132.781 29.0094 131.181 39.7094 127.081C45.3094 124.981 50.6094 121.981 55.0094 117.981C60.8094 112.781 64.4094 105.781 68.9094 99.4808C73.6094 93.1808 79.8094 88.3808 87.0094 84.9808C93.9094 81.6808 101.309 79.5808 108.509 77.1808C122.709 72.4808 137.109 65.6808 145.309 52.5808C149.309 46.1808 151.209 38.6808 150.209 31.0808C149.309 23.8808 145.909 17.1808 141.009 11.7808C138.709 9.18083 135.909 6.88083 132.809 4.98083C131.609 4.28083 130.509 6.18083 131.709 6.88083C144.009 14.2808 151.509 29.4808 147.009 43.5808C142.509 57.9808 128.809 67.1808 115.409 72.3808C101.909 77.5808 87.1094 80.2808 75.5094 89.4808C69.2094 94.4808 65.2094 101.281 60.7094 107.881C58.7094 110.881 56.5094 113.781 53.9094 116.181C51.9094 118.081 49.7094 119.681 47.3094 121.081C37.6094 126.881 24.5094 130.881 13.4094 126.981C7.80942 124.981 3.30942 120.581 1.20942 114.981C-0.99058 109.181 0.10942 102.981 3.10942 97.5808C6.20942 91.9808 11.1094 87.2808 16.3094 83.5808C21.7094 79.7808 27.6094 77.2808 34.1094 75.9808C38.1094 75.1808 42.2094 74.4808 45.9094 72.6808C48.9094 71.1808 51.5094 68.8808 53.8094 66.4808C58.2094 61.7808 61.3094 56.0808 63.9094 50.1808C69.3094 38.0808 73.1094 24.8808 82.8094 15.3808C92.9094 5.58083 107.809 -0.219166 121.809 2.98083C125.309 3.78083 128.609 5.08083 131.709 6.98083C132.909 7.68083 134.009 5.78083 132.809 4.98083Z" fill="#F3F0FF" id="path58" />
      <path d="M196.402 350.569C205.291 359.555 218.61 361.733 230.514 358.493C236.404 356.943 241.949 354.084 246.474 350.169C250.852 346.476 254.35 341.852 257.805 337.391C261.304 332.767 264.721 328.121 268.921 324.12C273.143 320.037 278.538 316.443 284.529 316.137C288.157 315.892 291.708 316.583 295.293 316.501C297.899 316.504 300.43 316.139 302.945 315.51C308.402 314.278 313.773 312.068 318.389 308.786C322.675 305.763 326.448 301.735 328 296.589C329.553 291.444 328.533 285.522 325.532 281.156C319.752 272.568 307.973 270.803 298.407 271.802C293.411 272.288 288.462 273.569 284.026 275.856C278.194 278.812 273.754 283.705 268.737 287.835C263.558 291.922 257.489 294.467 250.913 295.659C244.602 296.836 238.146 296.931 231.788 297.312C219.254 298.038 206.102 300.423 196.608 309.262C191.975 313.582 188.805 319.25 187.965 325.629C187.131 331.661 188.432 337.832 191.231 343.275C192.531 345.882 194.302 348.355 196.402 350.569C197.223 351.397 198.527 350.096 197.707 349.267C189.342 340.596 186.564 326.643 193.275 316.189C200.051 305.492 213.157 301.01 225.151 299.705C237.225 298.422 249.811 299.448 261.214 294.509C267.408 291.824 272.128 287.18 277.21 282.806C279.484 280.809 281.897 278.935 284.526 277.554C286.561 276.448 288.692 275.629 290.942 275.016C300.066 272.42 311.556 272.023 319.708 277.597C323.813 280.435 326.506 284.979 326.992 289.976C327.516 295.156 325.277 299.944 321.672 303.67C317.942 307.537 312.948 310.283 307.928 312.153C302.725 314.06 297.398 314.806 291.846 314.448C288.429 314.227 284.953 313.904 281.563 314.56C278.804 315.124 276.197 316.424 273.811 317.87C269.223 320.725 265.471 324.672 262.081 328.891C255.075 337.528 249.126 347.404 239.198 352.999C228.881 358.75 215.541 360.216 204.886 354.58C202.222 353.171 199.829 351.4 197.728 349.186C196.908 348.358 195.603 349.66 196.402 350.569Z" fill="#F3F0FF" id="path60" />
      <path d="M42.9 143L46.4 149.4L52.9 152.9L46.4 156.4L42.9 162.9L39.4 156.4L33 152.9L39.4 149.4L42.9 143Z" fill="#EDE9FE" id="path62" />
      <path d="M190.9 7L194.4 13.4L200.9 16.9L194.4 20.4L190.9 26.9L187.4 20.4L181 16.9L187.4 13.4L190.9 7Z" fill="#EDE9FE" id="path64" />
      <path d="M296.9 133L300.4 139.4L306.9 142.9L300.4 146.4L296.9 152.9L293.4 146.4L287 142.9L293.4 139.4L296.9 133Z" fill="#EDE9FE" id="path66" />
      <path d="M273.9 348L277.4 354.4L283.9 357.9L277.4 361.4L273.9 367.9L270.4 361.4L264 357.9L270.4 354.4L273.9 348Z" fill="#EDE9FE" id="path68" />
      <path d="M172.011 294C165.528 294 159.304 291.92 153.599 288.279C147.635 284.379 142.189 280.479 137.003 276.318C135.188 274.758 135.966 271.898 138.299 271.638L217.132 262.017C219.466 261.757 221.022 264.617 219.206 266.437C211.686 273.718 202.351 280.999 191.459 288.019C187.31 290.62 182.902 292.44 178.234 293.22H177.975L172.011 294Z" fill="#EDE9FE" id="path72" />
      <path d="M177.678 212.557L215.985 240.435C217.822 241.738 217.035 244.864 214.673 245.125L141.995 253.983C139.634 254.244 138.059 251.378 139.634 249.554L173.743 212.818C175.055 211.776 176.366 211.776 177.678 212.557Z" fill="#EDE9FE" id="path74" />
      <path d="M110.246 127.919C108.15 128.438 106.578 126.361 107.102 124.544C116.272 97.021 138.28 83 172.079 83H172.603C194.611 83 211.38 88.7122 223.17 100.137C224.742 101.695 223.956 104.031 221.86 104.551L110.246 127.919Z" fill="#EDE9FE" id="path76" />
      <path d="M179.837 192.121L120.103 148.098C118.269 146.788 118.793 143.906 121.151 143.381L179.575 131.066C180.885 130.803 181.933 131.328 182.457 132.638L216.778 213.346C217.826 215.705 214.944 218.063 212.848 216.491L179.837 192.121Z" fill="#EDE9FE" id="path78" />
      <path d="M115.579 250.137C114.533 251.449 112.441 251.187 111.395 249.875C105.381 240.689 102.244 231.504 102.244 222.581V208.41C102.244 203.948 100.152 200.011 96.7525 197.125C93.3533 194.5 91 188.202 91 181.641C91 175.08 93.3533 169.044 96.7525 166.157C98.844 164.32 100.413 162.22 101.459 159.596C101.982 158.021 104.074 157.496 105.381 158.546L158.984 198.437C160.291 199.487 160.291 201.061 159.246 202.373L115.579 250.137Z" fill="#EDE9FE" id="path80" />
      <path d="M254 181.86C254 188.351 251.648 194.583 248.25 197.179C244.853 199.776 242.762 203.93 242.762 208.344V222.365C242.762 223.144 242.762 224.182 242.762 224.961C242.762 225.481 242.239 226 241.716 226C241.194 226 240.932 225.74 240.671 225.481L200.161 130.191C199.639 128.633 200.423 127.075 201.991 126.816L233.876 120.065C235.183 119.805 236.489 120.325 236.751 121.623C240.41 131.23 242.5 142.394 242.762 155.377C242.762 159.791 244.853 163.685 248.512 166.541C251.909 169.397 254 175.369 254 181.86Z" fill="#EDE9FE" id="path82" />
      <g id="g121" transform="translate(-6.5)">
        <path d="m 254.838,158.778 c -1.046,-0.783 -1.83,-2.347 -1.83,-3.65 C 250.916,87.3397 208.307,73 173.016,73 h -0.523 c -35.551,0 -78.1611,14.3397 -80.2524,82.128 0,1.303 -0.7842,2.867 -1.8298,3.65 C 84.6597,163.471 81,172.335 81,181.982 c 0,9.647 3.6597,18.772 9.6722,23.204 1.0456,0.782 1.5684,2.086 1.5684,3.39 v 14.079 c 0,31.286 30.3234,57.619 55.6804,74.045 7.319,4.693 15.685,7.3 24.311,7.3 h 0.261 v -1.304 l 0.262,1.304 c 8.626,0 16.991,-2.607 24.311,-7.3 25.357,-16.426 55.68,-42.498 55.68,-74.045 v -14.079 c 0,-1.304 0.523,-2.608 1.569,-3.39 6.012,-4.693 9.672,-13.557 9.672,-23.204 0.261,-9.647 -3.398,-18.511 -9.149,-23.204 z M 172.232,75.6072 h 0.523 c 35.552,0 55.419,14.079 65.875,33.1118 L 96.4232,138.441 C 101.39,106.894 119.689,75.6072 172.232,75.6072 Z m 2.876,122.5398 -77.3778,-57.098 88.3568,-18.512 51.497,121.497 z m 65.352,51.101 -124.431,15.122 58.556,-63.355 z M 94.8547,222.655 v -14.079 c 0,-2.086 -1.0456,-3.911 -2.6141,-5.476 -5.2282,-4.171 -8.6265,-12.253 -8.6265,-21.118 0,-8.865 3.1369,-16.947 8.3651,-21.119 1.8299,-1.303 2.8755,-3.389 2.8755,-5.735 0,-4.172 0.5228,-8.344 1.0457,-12.515 l 76.5926,56.837 -59.601,64.399 C 102.174,251.595 94.8547,237.777 94.8547,222.655 Z m 19.8673,43.28 c 0,0 -0.262,0 0,0 z m 81.037,28.418 c -7.058,4.433 -14.9,6.779 -22.743,6.779 v 1.304 l -0.523,-1.043 h -0.261 c -8.104,0 -15.946,-2.347 -22.743,-6.779 -11.24,-7.3 -23.788,-16.686 -33.721,-27.376 l 125.738,-15.382 c -10.98,17.207 -29.278,32.068 -45.747,42.497 z m 57.249,-90.992 c -1.569,1.304 -2.614,3.39 -2.614,5.475 v 14.079 c 0,9.386 -2.876,18.251 -7.581,26.855 l -54.112,-127.754 51.759,-10.69 c 7.058,13.558 9.672,29.462 9.934,44.062 0,2.086 1.045,4.172 2.875,5.736 5.228,4.172 8.365,12.254 8.365,21.119 0,8.864 -3.398,16.947 -8.626,21.118 z" fill="#6c4ef4" id="path70" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="m 70,57 h -5 v 5 15 h 5 V 62 h 15 v -5 z" fill="#4930bc" id="path84" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="m 70,320 h -5 v -5 -15 h 5 v 15 h 15 v 5 z" fill="#4930bc" id="path86" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="m 275,57 h 5 v 5 15 h -5 V 62 h -15 v -5 z" fill="#4930bc" id="path88" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="m 275,320 h 5 v -5 -15 h -5 v 15 h -15 v 5 z" fill="#4930bc" id="path90" />
      </g>
    </g>
  </g>
  <defs id="defs102">
    <clipPath id="clip0">
      <rect width="332" height="384" fill="white" id="rect96" />
    </clipPath>
    <clipPath id="clip1">
      <rect width="335" height="384" fill="white" transform="translate(-2)" id="rect99" />
    </clipPath>
  </defs>
</svg>`;

  const SvgImage : React.FunctionComponent=()=> <SvgXml xml={svgMarkup} width={width * 0.9} />

  return <SvgImage />
}
