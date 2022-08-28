import React, { FC } from "react";
import styled from "styled-components";

interface SVGProps {
  widthCustom: string;
  heightCustom: string;
}
const SVG = styled("svg")<SVGProps>`
  width: ${({ widthCustom }) => widthCustom};
  height: ${({ heightCustom }) => heightCustom};
  cursor: pointer;
`;
const Brand: FC<{
  color: string;
  width: string;
  height: string;
}> = ({ color, width, height }) => {
  return (
    <SVG
      widthCustom={width}
      heightCustom={height}
      viewBox="0 0 217 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9176 19.6562H13.1847C13.1165 19.1733 12.9773 18.7443 12.767 18.3693C12.5568 17.9886 12.2869 17.6648 11.9574 17.3977C11.6278 17.1307 11.2472 16.9261 10.8153 16.7841C10.3892 16.642 9.92614 16.571 9.42614 16.571C8.52273 16.571 7.7358 16.7955 7.06534 17.2443C6.39489 17.6875 5.875 18.3352 5.50568 19.1875C5.13636 20.0341 4.9517 21.0625 4.9517 22.2727C4.9517 23.517 5.13636 24.5625 5.50568 25.4091C5.88068 26.2557 6.40341 26.8949 7.07386 27.3267C7.74432 27.7585 8.51989 27.9744 9.40057 27.9744C9.89489 27.9744 10.3523 27.9091 10.7727 27.7784C11.1989 27.6477 11.5767 27.4574 11.9062 27.2074C12.2358 26.9517 12.5085 26.642 12.7244 26.2784C12.946 25.9148 13.0994 25.5 13.1847 25.0341L16.9176 25.0511C16.821 25.8523 16.5795 26.625 16.1932 27.3693C15.8125 28.108 15.2983 28.7699 14.6506 29.3551C14.0085 29.9347 13.2415 30.3949 12.3494 30.7358C11.4631 31.071 10.4602 31.2386 9.34091 31.2386C7.78409 31.2386 6.39205 30.8864 5.16477 30.1818C3.94318 29.4773 2.97727 28.4574 2.26705 27.1222C1.5625 25.7869 1.21023 24.1705 1.21023 22.2727C1.21023 20.3693 1.56818 18.75 2.28409 17.4148C3 16.0795 3.97159 15.0625 5.19886 14.3636C6.42614 13.6591 7.80682 13.3068 9.34091 13.3068C10.3523 13.3068 11.2898 13.4489 12.1534 13.733C13.0227 14.017 13.7926 14.4318 14.4631 14.9773C15.1335 15.517 15.679 16.179 16.0994 16.9631C16.5256 17.7472 16.7983 18.6449 16.9176 19.6562ZM37.6727 18.5653C37.6045 17.8778 37.3119 17.3437 36.7948 16.9631C36.2778 16.5824 35.5761 16.392 34.6897 16.392C34.0874 16.392 33.5789 16.4773 33.1641 16.6477C32.7494 16.8125 32.4312 17.0426 32.2096 17.3381C31.9937 17.6335 31.8857 17.9688 31.8857 18.3438C31.8744 18.6562 31.9397 18.929 32.0818 19.1619C32.2295 19.3949 32.4312 19.5966 32.6869 19.767C32.9426 19.9318 33.238 20.0767 33.5732 20.2017C33.9085 20.321 34.2664 20.4233 34.6471 20.5085L36.2153 20.8835C36.9766 21.054 37.6755 21.2812 38.3119 21.5653C38.9482 21.8494 39.4994 22.1989 39.9653 22.6136C40.4312 23.0284 40.792 23.517 41.0477 24.0795C41.309 24.642 41.4426 25.2869 41.4482 26.0142C41.4426 27.0824 41.1698 28.0085 40.6301 28.7926C40.096 29.571 39.3232 30.1761 38.3119 30.608C37.3062 31.0341 36.0931 31.2472 34.6727 31.2472C33.2636 31.2472 32.0363 31.0312 30.9909 30.5994C29.9511 30.1676 29.1386 29.5284 28.5534 28.6818C27.9738 27.8295 27.6698 26.7756 27.6414 25.5199H31.2124C31.2522 26.1051 31.4198 26.5937 31.7153 26.9858C32.0164 27.3722 32.417 27.6648 32.917 27.8636C33.4227 28.0568 33.9937 28.1534 34.6301 28.1534C35.2551 28.1534 35.7977 28.0625 36.2579 27.8807C36.7238 27.6989 37.0846 27.446 37.3403 27.1222C37.596 26.7983 37.7238 26.4261 37.7238 26.0057C37.7238 25.6136 37.6073 25.2841 37.3744 25.017C37.1471 24.75 36.8119 24.5227 36.3687 24.3352C35.9312 24.1477 35.3943 23.9773 34.7579 23.8239L32.8573 23.3466C31.3857 22.9886 30.2238 22.429 29.3715 21.6676C28.5193 20.9062 28.096 19.8807 28.1016 18.5909C28.096 17.5341 28.3772 16.6108 28.9454 15.821C29.5193 15.0312 30.3062 14.4148 31.3062 13.9716C32.3062 13.5284 33.4426 13.3068 34.7153 13.3068C36.0107 13.3068 37.1414 13.5284 38.1073 13.9716C39.0789 14.4148 39.8346 15.0312 40.3744 15.821C40.9141 16.6108 41.1926 17.5256 41.2096 18.5653H37.6727ZM55.1806 31H51.226L57.2516 13.5455H62.0073L68.0243 31H64.0698L59.6976 17.5341H59.5612L55.1806 31ZM54.9334 24.1392H64.2743V27.0199H54.9334V24.1392Z"
        fill={color}
      />
      <line
        x1="85"
        y1="4.37114e-08"
        x2="85"
        y2="44"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M109.08 14H108.023C107.96 13.696 107.851 13.429 107.695 13.1989C107.541 12.9688 107.354 12.7756 107.132 12.6193C106.913 12.4602 106.67 12.3409 106.403 12.2614C106.136 12.1818 105.858 12.142 105.568 12.142C105.04 12.142 104.561 12.2756 104.132 12.5426C103.706 12.8097 103.366 13.2031 103.114 13.723C102.864 14.2429 102.739 14.8807 102.739 15.6364C102.739 16.392 102.864 17.0298 103.114 17.5497C103.366 18.0696 103.706 18.4631 104.132 18.7301C104.561 18.9972 105.04 19.1307 105.568 19.1307C105.858 19.1307 106.136 19.0909 106.403 19.0114C106.67 18.9318 106.913 18.8139 107.132 18.6577C107.354 18.4986 107.541 18.304 107.695 18.0739C107.851 17.8409 107.96 17.5739 108.023 17.2727H109.08C109 17.7187 108.855 18.1179 108.645 18.4702C108.435 18.8224 108.173 19.1222 107.861 19.3693C107.548 19.6136 107.197 19.7997 106.808 19.9276C106.422 20.0554 106.009 20.1193 105.568 20.1193C104.824 20.1193 104.162 19.9375 103.582 19.5739C103.003 19.2102 102.547 18.6932 102.214 18.0227C101.882 17.3523 101.716 16.5568 101.716 15.6364C101.716 14.7159 101.882 13.9205 102.214 13.25C102.547 12.5795 103.003 12.0625 103.582 11.6989C104.162 11.3352 104.824 11.1534 105.568 11.1534C106.009 11.1534 106.422 11.2173 106.808 11.3452C107.197 11.473 107.548 11.6605 107.861 11.9077C108.173 12.152 108.435 12.4503 108.645 12.8026C108.855 13.152 109 13.5511 109.08 14ZM113.967 20V11.2727H115.024V15.1591H119.678V11.2727H120.734V20H119.678V16.0966H115.024V20H113.967ZM126.03 20V11.2727H128.979C129.661 11.2727 130.22 11.3892 130.658 11.6222C131.095 11.8523 131.419 12.169 131.63 12.5724C131.84 12.9759 131.945 13.4347 131.945 13.9489C131.945 14.4631 131.84 14.919 131.63 15.3168C131.419 15.7145 131.097 16.027 130.662 16.2543C130.228 16.4787 129.672 16.5909 128.996 16.5909H126.61V15.6364H128.962C129.428 15.6364 129.803 15.5682 130.087 15.4318C130.374 15.2955 130.581 15.1023 130.709 14.8523C130.84 14.5994 130.905 14.2983 130.905 13.9489C130.905 13.5994 130.84 13.294 130.709 13.0327C130.578 12.7713 130.37 12.5696 130.083 12.4276C129.796 12.2827 129.416 12.2102 128.945 12.2102H127.087V20H126.03ZM130.138 16.0795L132.286 20H131.059L128.945 16.0795H130.138ZM137.943 11.2727V20H136.886V11.2727H137.943ZM148.014 13.4545C147.963 13.0227 147.756 12.6875 147.392 12.4489C147.029 12.2102 146.583 12.0909 146.054 12.0909C145.668 12.0909 145.33 12.1534 145.04 12.2784C144.753 12.4034 144.529 12.5753 144.367 12.794C144.208 13.0128 144.128 13.2614 144.128 13.5398C144.128 13.7727 144.183 13.973 144.294 14.1406C144.408 14.3054 144.553 14.4432 144.729 14.554C144.905 14.6619 145.09 14.7514 145.283 14.8224C145.476 14.8906 145.654 14.946 145.816 14.9886L146.702 15.2273C146.929 15.2869 147.182 15.3693 147.46 15.4744C147.742 15.5795 148.01 15.723 148.266 15.9048C148.524 16.0838 148.737 16.3139 148.905 16.5952C149.073 16.8764 149.156 17.2216 149.156 17.6307C149.156 18.1023 149.033 18.5284 148.786 18.9091C148.541 19.2898 148.183 19.5923 147.712 19.8168C147.243 20.0412 146.673 20.1534 146.003 20.1534C145.378 20.1534 144.837 20.0526 144.379 19.8509C143.925 19.6491 143.567 19.3679 143.306 19.0071C143.047 18.6463 142.901 18.2273 142.867 17.75H143.958C143.986 18.0795 144.097 18.3523 144.29 18.5682C144.486 18.7812 144.733 18.9403 145.031 19.0455C145.333 19.1477 145.656 19.1989 146.003 19.1989C146.406 19.1989 146.769 19.1335 147.09 19.0028C147.411 18.8693 147.665 18.6847 147.852 18.4489C148.04 18.2102 148.134 17.9318 148.134 17.6136C148.134 17.3239 148.053 17.0881 147.891 16.9062C147.729 16.7244 147.516 16.5767 147.252 16.4631C146.987 16.3494 146.702 16.25 146.395 16.1648L145.321 15.858C144.639 15.6619 144.1 15.3821 143.702 15.0185C143.304 14.6548 143.105 14.179 143.105 13.5909C143.105 13.1023 143.237 12.6761 143.502 12.3125C143.769 11.946 144.127 11.6619 144.575 11.4602C145.027 11.2557 145.531 11.1534 146.088 11.1534C146.651 11.1534 147.151 11.2543 147.588 11.456C148.026 11.6548 148.372 11.9276 148.628 12.2741C148.887 12.6207 149.023 13.0142 149.037 13.4545H148.014ZM153.597 12.2102V11.2727H160.142V12.2102H157.398V20H156.341V12.2102H153.597ZM171.954 15.6364C171.954 16.5568 171.787 17.3523 171.455 18.0227C171.123 18.6932 170.667 19.2102 170.087 19.5739C169.508 19.9375 168.846 20.1193 168.101 20.1193C167.357 20.1193 166.695 19.9375 166.116 19.5739C165.536 19.2102 165.08 18.6932 164.748 18.0227C164.415 17.3523 164.249 16.5568 164.249 15.6364C164.249 14.7159 164.415 13.9205 164.748 13.25C165.08 12.5795 165.536 12.0625 166.116 11.6989C166.695 11.3352 167.357 11.1534 168.101 11.1534C168.846 11.1534 169.508 11.3352 170.087 11.6989C170.667 12.0625 171.123 12.5795 171.455 13.25C171.787 13.9205 171.954 14.7159 171.954 15.6364ZM170.931 15.6364C170.931 14.8807 170.804 14.2429 170.552 13.723C170.302 13.2031 169.962 12.8097 169.533 12.5426C169.107 12.2756 168.63 12.142 168.101 12.142C167.573 12.142 167.094 12.2756 166.665 12.5426C166.239 12.8097 165.9 13.2031 165.647 13.723C165.397 14.2429 165.272 14.8807 165.272 15.6364C165.272 16.392 165.397 17.0298 165.647 17.5497C165.9 18.0696 166.239 18.4631 166.665 18.7301C167.094 18.9972 167.573 19.1307 168.101 19.1307C168.63 19.1307 169.107 18.9972 169.533 18.7301C169.962 18.4631 170.302 18.0696 170.552 17.5497C170.804 17.0298 170.931 16.392 170.931 15.6364ZM176.911 20V11.2727H179.859C180.544 11.2727 181.104 11.3963 181.538 11.6435C181.976 11.8878 182.3 12.2188 182.51 12.6364C182.72 13.054 182.825 13.5199 182.825 14.0341C182.825 14.5483 182.72 15.0156 182.51 15.4361C182.303 15.8565 181.982 16.1918 181.547 16.4418C181.112 16.6889 180.555 16.8125 179.876 16.8125H177.763V15.875H179.842C180.311 15.875 180.688 15.794 180.972 15.6321C181.256 15.4702 181.462 15.2514 181.59 14.9759C181.72 14.6974 181.786 14.3835 181.786 14.0341C181.786 13.6847 181.72 13.3722 181.59 13.0966C181.462 12.821 181.254 12.6051 180.967 12.4489C180.68 12.2898 180.3 12.2102 179.825 12.2102H177.967V20H176.911ZM187.708 20V11.2727H188.765V15.1591H193.418V11.2727H194.475V20H193.418V16.0966H188.765V20H187.708ZM199.771 20V11.2727H205.038V12.2102H200.827V15.1591H204.765V16.0966H200.827V19.0625H205.106V20H199.771ZM210.122 20V11.2727H213.071C213.753 11.2727 214.313 11.3892 214.75 11.6222C215.188 11.8523 215.512 12.169 215.722 12.5724C215.932 12.9759 216.037 13.4347 216.037 13.9489C216.037 14.4631 215.932 14.919 215.722 15.3168C215.512 15.7145 215.189 16.027 214.755 16.2543C214.32 16.4787 213.764 16.5909 213.088 16.5909H210.702V15.6364H213.054C213.52 15.6364 213.895 15.5682 214.179 15.4318C214.466 15.2955 214.674 15.1023 214.801 14.8523C214.932 14.5994 214.997 14.2983 214.997 13.9489C214.997 13.5994 214.932 13.294 214.801 13.0327C214.671 12.7713 214.462 12.5696 214.175 12.4276C213.888 12.2827 213.509 12.2102 213.037 12.2102H211.179V20H210.122ZM214.23 16.0795L216.378 20H215.151L213.037 16.0795H214.23ZM106.83 28.4545C106.778 28.0227 106.571 27.6875 106.207 27.4489C105.844 27.2102 105.398 27.0909 104.869 27.0909C104.483 27.0909 104.145 27.1534 103.855 27.2784C103.568 27.4034 103.344 27.5753 103.182 27.794C103.023 28.0128 102.943 28.2614 102.943 28.5398C102.943 28.7727 102.999 28.973 103.109 29.1406C103.223 29.3054 103.368 29.4432 103.544 29.554C103.72 29.6619 103.905 29.7514 104.098 29.8224C104.291 29.8906 104.469 29.946 104.631 29.9886L105.517 30.2273C105.744 30.2869 105.997 30.3693 106.276 30.4744C106.557 30.5795 106.825 30.723 107.081 30.9048C107.339 31.0838 107.553 31.3139 107.72 31.5952C107.888 31.8764 107.972 32.2216 107.972 32.6307C107.972 33.1023 107.848 33.5284 107.601 33.9091C107.357 34.2898 106.999 34.5923 106.527 34.8168C106.058 35.0412 105.489 35.1534 104.818 35.1534C104.193 35.1534 103.652 35.0526 103.195 34.8509C102.74 34.6491 102.382 34.3679 102.121 34.0071C101.862 33.6463 101.716 33.2273 101.682 32.75H102.773C102.801 33.0795 102.912 33.3523 103.105 33.5682C103.301 33.7812 103.548 33.9403 103.847 34.0455C104.148 34.1477 104.472 34.1989 104.818 34.1989C105.222 34.1989 105.584 34.1335 105.905 34.0028C106.226 33.8693 106.48 33.6847 106.668 33.4489C106.855 33.2102 106.949 32.9318 106.949 32.6136C106.949 32.3239 106.868 32.0881 106.706 31.9062C106.544 31.7244 106.331 31.5767 106.067 31.4631C105.803 31.3494 105.517 31.25 105.21 31.1648L104.136 30.858C103.455 30.6619 102.915 30.3821 102.517 30.0185C102.119 29.6548 101.92 29.179 101.92 28.5909C101.92 28.1023 102.053 27.6761 102.317 27.3125C102.584 26.946 102.942 26.6619 103.391 26.4602C103.842 26.2557 104.347 26.1534 104.903 26.1534C105.466 26.1534 105.966 26.2543 106.403 26.456C106.841 26.6548 107.188 26.9276 107.443 27.2741C107.702 27.6207 107.838 28.0142 107.852 28.4545H106.83ZM112.139 26.2727H113.349L115.77 30.3466H115.872L118.293 26.2727H119.503L116.349 31.4034V35H115.293V31.4034L112.139 26.2727ZM130.963 35H129.855L133.059 26.2727H134.15L137.355 35H136.247L133.639 27.6534H133.571L130.963 35ZM131.372 31.5909H135.838V32.5284H131.372V31.5909ZM141.894 35V26.2727H142.951V34.0625H147.008V35H141.894ZM151.824 35V26.2727H154.875C155.483 26.2727 155.985 26.3778 156.379 26.5881C156.774 26.7955 157.068 27.0753 157.262 27.4276C157.455 27.777 157.551 28.1648 157.551 28.5909C157.551 28.9659 157.485 29.2756 157.351 29.5199C157.22 29.7642 157.047 29.9574 156.831 30.0994C156.618 30.2415 156.387 30.3466 156.137 30.4148V30.5C156.404 30.517 156.672 30.6108 156.942 30.7812C157.212 30.9517 157.438 31.196 157.619 31.5142C157.801 31.8324 157.892 32.2216 157.892 32.6818C157.892 33.1193 157.793 33.5128 157.594 33.8622C157.395 34.2116 157.081 34.4886 156.652 34.6932C156.223 34.8977 155.665 35 154.977 35H151.824ZM152.881 34.0625H154.977C155.668 34.0625 156.158 33.929 156.448 33.6619C156.74 33.392 156.887 33.0653 156.887 32.6818C156.887 32.3864 156.811 32.1136 156.661 31.8636C156.51 31.6108 156.296 31.4091 156.017 31.2585C155.739 31.1051 155.409 31.0284 155.029 31.0284H152.881V34.0625ZM152.881 30.108H154.841C155.159 30.108 155.446 30.0455 155.702 29.9205C155.96 29.7955 156.165 29.6193 156.315 29.392C156.469 29.1648 156.546 28.8977 156.546 28.5909C156.546 28.2074 156.412 27.8821 156.145 27.6151C155.878 27.3452 155.455 27.2102 154.875 27.2102H152.881V30.108ZM163.167 35H162.059L165.263 26.2727H166.354L169.559 35H168.451L165.843 27.6534H165.775L163.167 35ZM163.576 31.5909H168.042V32.5284H163.576V31.5909Z"
        fill={color}
      />
    </SVG>
  );
};

export default Brand;
