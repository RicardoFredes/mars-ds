import type { IconLibProps } from "@/libs/icons/icons.types";

const Trash = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 4H15.5 L14 3 H9.5 L8.5 4H5V6H19M6 19A2 2 0 0 0 8 21H16A2 2 0 0 0 18 19V7H6V19Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Trash;
