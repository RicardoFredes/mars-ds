import type { IconLibProps } from "../icon.types";

const IconDownload = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

    <rect 
      x="4" 
      y="18" 
      width="16" 
      height="2" 
      rx="1" 
      fill="currentColor"
    />

    <rect 
      x="4" 
      y="20" 
      width="4" 
      height="2" 
      rx="1" 
      transform="rotate(-90 4 20)" 
      fill="currentColor"
    />

    <rect 
      x="18" 
      y="20" 
      width="4" 
      height="2" 
      rx="1" 
      transform="rotate(-90 18 20)" 
      fill="currentColor"
    />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15C11.7927 15.0016 11.59 14.9387 11.42 14.82L7.42 12C6.97118 11.6816 6.86393 11.0604 7.18 10.61C7.33307 10.3916 7.56708 10.2433 7.82998 10.1982C8.09289 10.1532 8.36291 10.215 8.58 10.37L12 12.76L15.4 10.2C15.8418 9.86863 16.4686 9.95817 16.8 10.4C17.1314 10.8418 17.0418 11.4686 16.6 11.8L12.6 14.8C12.4269 14.9298 12.2164 15 12 15Z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V12C13 12.5523 12.5523 13 12 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconDownload;
