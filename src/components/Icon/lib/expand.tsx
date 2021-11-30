import type { IconLibProps } from "../icon.types";

const IconExpand = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="20 5C20 4.44772 19.5523 4 19 4H14C13.4477 4 13 4.44772 13 5C13 5.55228 13.4477 6 14 6H16.57L13.29 9.29C13.1007 9.47777 12.9942 9.73336 12.9942 10C12.9942 10.2666 13.1007 10.5222 13.29 10.71C13.4778 10.8993 13.7334 11.0058 14 11.0058C14.2666 11.0058 14.5222 10.8993 14.71 10.71L18 7.42V10C18 10.5523 18.4477 11 19 11C19.5523 11 20 10.5523 20 10V5Z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.71 13.29C10.5222 13.1007 10.2666 12.9942 10 12.9942C9.73336 12.9942 9.47777 13.1007 9.29 13.29L6 16.57V14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14V19C4 19.5523 4.44772 20 5 20H10C10.5523 20 11 19.5523 11 19C11 18.4477 10.5523 18 10 18H7.42L10.71 14.71C10.8993 14.5222 11.0058 14.2666 11.0058 14C11.0058 13.7334 10.8993 13.4778 10.71 13.29Z"
        fill="currentColor"
      />        
    </svg>
  );
};

export default IconExpand;
