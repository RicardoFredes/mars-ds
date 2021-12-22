import { LogoIconProps } from "..";

const LogoFull = ({ height = 128 }: LogoIconProps) => {
  return (
    <svg
      height={height}
      viewBox="0 0 348 128"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.048 65.2695C91.2371 64.8693 91.3304 64.0958 91.1413 63.7324C90.6674 62.8166 89.4397 62.6349 88.9683 63.6367C86.8861 67.7421 78.9233 78.7766 70.963 79.4714C67.2775 79.8005 65.1855 76.6379 65.1855 71.9432C65.1855 70.9906 65.2788 70.0256 65.3721 69.0606C75.3213 71.6191 86.3091 61.8541 86.3091 50.8589C86.3091 44.1581 81.1086 40.3204 76.1733 40.7525C66.2536 41.6291 55.9827 55.0699 54.868 70.3399C52.7121 73.6227 50.0431 77.1069 48.3244 77.2616C44.5308 77.5955 49.2697 63.9731 52.0074 55.5069C53.7115 50.1051 52.6704 42.8322 46.8929 43.338C42.4388 43.7285 37.9847 49.1033 34.4858 55.4308C35.4312 50.3825 34.201 44.4626 28.9931 44.9218C24.819 45.2852 20.4631 50.1714 17.0477 56.2165C17.5388 54.7433 17.9096 53.4665 18.2754 52.4745C19.7879 48.4182 11.7294 45.6878 9.19049 51.1781C6.34471 57.2601 0 80.7826 0 86.0298C0 92.1486 7.8695 93.8452 8.53 89.5802C9.09719 86.2778 10.5164 79.8447 12.3236 73.0874C14.6881 65.6992 20.6522 56.0864 23.1272 55.8679C24.3549 55.7623 23.4096 59.8579 22.8326 61.9204C20.2815 70.7597 17.8113 81.2 17.8113 84.4534C17.8113 90.5722 25.6808 92.2713 26.3413 88.0064C26.8152 84.9027 28.2418 78.7569 29.8501 72.3901C32.0255 64.8398 38.4758 54.5125 41.027 54.2841C42.2547 54.1786 41.3118 58.2815 40.7446 60.3342C38.5691 67.7003 35.7233 76.6551 35.7233 82.3933C35.7233 86.6019 37.1426 89.1506 40.4598 88.8657C45.54 88.4164 51.0793 81.4014 54.9097 75.4814C55.8918 83.5842 61.8216 86.9751 68.2252 86.4128C79.8686 85.3815 88.1163 70.4995 91.048 65.2695ZM76.3722 47.3452C77.4108 47.2519 78.1671 48.2341 78.1671 49.4839C78.1671 55.89 71.2453 64.8226 66.1357 64.5083C68.3136 55.61 73.6197 47.5809 76.3624 47.3428L76.3722 47.3452Z"
        fill="currentColor"
      />
      <path
        d="M310.92 84.0924C305.272 65.7385 315.403 38.3634 316.773 33.0647C318.212 27.5106 308.631 24.5028 305.066 31.5104C304.217 33.104 303.242 35.4611 302.134 38.3339C303.222 32.5687 301.169 25.9735 294.324 26.6316C287.373 27.3019 279.724 33.6466 274.19 46.6847L274.047 46.8001C273.281 47.3918 272.525 47.9541 271.796 48.4894C269.981 49.8395 268.079 51.0698 266.104 52.1725C268.724 44.7842 270.217 37.6071 270.217 32.5859C270.217 29.6861 268.469 28.0803 266.104 28.2914C257.64 29.028 254.026 44.3152 254.026 51.372C254.004 53.0189 254.3 54.6546 254.898 56.1895C249.913 68.4369 244.07 78.7643 240.458 79.0785C236.6 79.4223 240.949 59.0524 247.797 38.5893C249.545 33.2832 236.6 29.6468 234.103 37.0252C231.758 44.1262 227.407 57.012 226.207 69.0851C223.506 73.1218 220.164 77.102 217.176 77.372C212.685 77.7625 215.305 67.7298 218.038 57.8125C224.647 34.2408 231.994 14.7181 233.234 10.345C234.85 4.92356 224.269 1.20121 221.149 8.64838C219.295 13.5935 211.19 38.1793 206.215 55.1975C205.034 59.2071 203.701 63.5458 202.547 67.8157C199.551 72.6479 195.011 79.3093 192.256 79.5549C185.275 80.1761 199.234 45.8916 200.359 42.761C202.345 37.4353 192.011 34.0837 188.399 41.0422C187.537 42.6358 186.535 44.9856 185.408 47.8485C186.535 42.1029 184.549 35.4882 177.693 36.0873C169.099 36.8533 159.393 46.255 153.788 66.2295C153.144 68.54 152.643 70.7474 152.282 72.8345C150.988 72.8173 149.722 72.8345 148.599 72.8738L145.687 73.0923L145.525 72.7314C143.495 67.9581 139.632 62.9369 133.695 57.3828C129.158 53.1448 124.713 49.9774 120.79 47.1782C114.509 42.7021 109.971 39.4659 109.478 34.9013C109.193 32.2691 110.273 29.4332 112.864 25.9883C120.552 15.7763 128.382 10.8017 132.733 10.4113C134.776 10.2395 136.249 10.9933 136.882 12.5573L136.968 12.7783L136.892 13.0239C134.226 20.6012 139.522 25.2517 145.091 25.0037C155.158 24.5642 157.925 10.62 152.005 3.97579C149.395 1.04161 145.263 -0.323587 140.364 0.115926C137.774 0.385869 135.232 1.00278 132.806 1.9501C117.517 7.70306 106.944 17.7357 101.999 23.2039C96.1058 29.6959 93.3828 34.7835 93.4393 39.2105C93.5154 45.9039 99.6514 51.2664 108.94 59.3815C110.016 60.3268 111.15 61.2991 112.294 62.3279C114.376 64.2358 116.333 65.9349 118.236 67.5775C120.976 69.9642 123.351 72.0144 125.357 74.0966L126.216 74.9756L124.949 75.1941C89.96 81.0527 76.8237 91.6452 72.7772 95.9151C61.2492 108.123 69.2783 130.583 100.967 127.756C107.207 127.194 113.279 125.63 118.499 123.214C136.882 114.728 147.143 100.239 147.342 78.725L147.833 78.612C148.855 78.3665 150.178 78.0841 151.644 77.8288C150.689 90.1302 155.02 97.1747 161.726 96.583C168.432 95.9912 172.704 90.2186 176.497 84.8536V86.2458C176.497 91.7729 178.03 95.1416 182.39 94.7611C188.556 94.216 195.158 86.1132 200.094 78.6881C199.794 80.5027 199.63 82.337 199.603 84.1759C199.603 89.7103 201.967 93.0153 206.952 92.5733C214.006 91.9447 220.918 83.9795 225.912 76.5962C226.374 86.4177 231.444 90.4077 238.071 89.8257C247.785 88.9664 257.751 73.7626 263.853 58.2716C265.752 57.5763 267.58 56.6972 269.308 55.6468C270.001 55.254 270.681 54.8145 271.361 54.3578C271.381 54.3381 271.408 54.3283 271.427 54.3086C271.162 55.168 270.907 56.0569 270.661 56.9629C265.451 76.331 273.016 88.0603 281.612 87.228C287.996 86.619 294.596 81.335 298.464 76.1787C298.302 80.4167 299.077 85.3324 300.251 88.3771C268.525 101.302 201.299 116.457 167.199 106.017C162.214 104.489 158.45 102.825 158.497 109.299C158.593 119.055 167.302 125.525 180.124 125.402C207.067 124.763 264.874 109.196 302.775 93.7421C310.718 102.007 321.281 102.581 331.732 100.32C351.905 95.9838 349.04 71.322 310.92 84.0924ZM129.867 91.5863C120.291 120.948 72.873 119.924 82.1691 104.128C86.6108 96.578 118.16 83.6259 130.358 82.4154L130.906 82.3565L130.982 82.9016C131.002 83.0612 131.493 86.6018 129.867 91.5863ZM178.189 67.9728C174.332 79.7415 169.104 88.3697 166.359 87.2329C163.749 86.0788 164.618 75.6926 168.468 63.9264C172.318 52.1602 177.688 43.5001 180.298 44.5289C183.041 45.6706 182.047 56.1919 178.189 67.9802V67.9728ZM295.08 58.5049C291.316 70.3104 286.155 78.9779 283.412 77.8705C280.782 76.7337 281.568 66.3302 285.33 54.5444C289.091 42.7585 294.39 34.0419 297.01 35.0462C299.753 36.1757 298.844 46.7043 295.08 58.5123V58.5049ZM330.042 96.7426C323.44 98.1642 315.555 94.4419 312.906 89.0769C336.5 79.4419 344.934 93.5309 330.042 96.7426Z"
        fill="currentColor"
      />
      <path
        d="M336.61 2.91754C332.294 19.344 329.34 28.9593 323.56 46.2501C322.187 50.3039 329.34 53.0736 330.396 51.0676C335.447 40.9538 342.076 24.8539 347.871 6.60061C349.346 2.00659 338.295 -3.49592 336.61 2.91754Z"
        fill="currentColor"
      />
      <path
        d="M321.559 71.6068C325.242 71.2852 328.925 67.8771 329.767 63.9779C330.715 60.0665 328.505 57.1864 324.815 57.5105C321.245 57.8272 317.554 61.2279 316.614 65.1393C315.673 69.0508 317.871 71.9432 321.559 71.6068Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LogoFull;
