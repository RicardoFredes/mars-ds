import type { IconLibProps } from "@/libs/icons/icons.types";

const IconMinus = ({ width = 24, height = 24 }: IconLibProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default IconMinus;
