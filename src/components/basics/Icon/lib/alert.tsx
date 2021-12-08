import type { IconLibProps } from "../icon.types";

const IconAlert = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M22.56 16.3L14.89 3.58C14.2597 2.594 13.1702 1.99738 12 1.99738C10.8298 1.99738 9.74028 2.594 9.11 3.58L1.44 16.3C0.888547 17.2192 0.869487 18.3629 1.39 19.3C1.99198 20.3551 3.11523 21.0046 4.33 21H19.67C20.8765 21.0129 21.9978 20.3797 22.61 19.34C23.1461 18.3926 23.127 17.2292 22.56 16.3ZM12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17ZM12 14C12.5523 14 13 13.5523 13 13V9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9V13C11 13.5523 11.4477 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconAlert;