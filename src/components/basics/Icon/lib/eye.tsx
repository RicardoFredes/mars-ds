import type { IconLibProps } from "../icon.types";

const IconEye = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.73 4.99999C17.71 4.81999 21.23 10.39 21.87 11.5C22.0486 11.8094 22.0486 12.1906 21.87 12.5C21.01 14 17.8 18.86 12.27 19H12.02C6.13001 19 2.76001 13.59 2.13001 12.5C1.95137 12.1906 1.95137 11.8094 2.13001 11.5C3.00001 9.99999 6.20001 5.13999 11.73 4.99999ZM8.50001 12C8.50001 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.49999 12 8.49999C10.067 8.49999 8.50001 10.067 8.50001 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconEye;
