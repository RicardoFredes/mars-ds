import type { IconLibProps } from "@/libs/icons/icons.types";

const IconThumbDown = ({ width = 24, height = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3H6.5C5.67 3 4.96 3.5 4.66 4.22L1.64 11.27C1.55 11.5 1.5 11.74 1.5 12V14C1.5 15.1 2.4 16 3.5 16H9.81L8.86 20.57L8.83 20.89C8.83 21.3 9 21.68 9.27 21.95L10.33 23L16.92 16.41C17.28 16.05 17.5 15.55 17.5 15V5C17.5 3.9 16.6 3 15.5 3ZM19.5 3V15H23.5V3H19.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconThumbDown;
