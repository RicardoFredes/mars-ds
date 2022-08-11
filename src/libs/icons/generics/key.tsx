import type { IconLibProps } from "@/libs/icons/icons.types";

const Key = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M7 6C9.61 6 11.83 7.67 12.65 10H23V14H21V18H17V14H12.65C11.83 16.33 9.61 18 7 18C3.69 18 1 15.31 1 12C1 8.69 3.69 6 7 6ZM5 12C5 13.1 5.9 14 7 14C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10C5.9 10 5 10.9 5 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Key;
