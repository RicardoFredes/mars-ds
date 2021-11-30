import type { IconLibProps } from "../icon.types";

const IconExternalLink = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11C19.4477 11 19 11.4477 19 12V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H12C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V12C21 11.4477 20.5523 11 20 11Z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5H17.58L11.29 11.28C11.1007 11.4678 10.9942 11.7234 10.9942 11.99C10.9942 12.2566 11.1007 12.5122 11.29 12.7C11.4778 12.8893 11.7334 12.9958 12 12.9958C12.2666 12.9958 12.5222 12.8893 12.71 12.7L19 6.42V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconExternalLink;
