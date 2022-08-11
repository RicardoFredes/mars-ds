import type { IconLibProps } from "@/libs/icons/icons.types";

const Receipt = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M4.5 20.5L3 22V2L4.5 3.5L6 2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2L19.5 3.5L21 2V22L19.5 20.5L18 22L16.5 20.5L15 22L13.5 20.5L12 22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5ZM18 7V9H6V7H18ZM6 11V13H18V11H6ZM6 15V17H18V15H6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Receipt;
