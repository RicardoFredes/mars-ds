import type { IconLibProps } from "@/libs/icons/icons.types";

const Circle = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" fill="currentColor" />
    </svg>
  );
};

export default Circle;
