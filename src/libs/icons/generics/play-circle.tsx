import type { IconLibProps } from "@/libs/icons/icons.types";

const PlayCircle = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11.04 15.51L15.19 12.84C15.3303 12.7493 15.4457 12.625 15.5256 12.4782C15.6055 12.3315 15.6474 12.1671 15.6474 12C15.6474 11.8329 15.6055 11.6685 15.5256 11.5218C15.4457 11.375 15.3303 11.2507 15.19 11.16L11.04 8.49C10.38 8.06 9.5 8.54 9.5 9.33V14.67C9.5 15.46 10.38 15.94 11.04 15.51Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayCircle;
