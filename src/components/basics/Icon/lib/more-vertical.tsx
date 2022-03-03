import type { IconLibProps } from "../icon.types";

const IconMoreHorizontal = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <g data-name="more-vertical">
        <circle fill="currentColor" cx="12" cy="12" r="2" />
        <circle fill="currentColor" cx="12" cy="5" r="2" />
        <circle fill="currentColor" cx="12" cy="19" r="2" />
      </g>
    </svg>
  );
};

export default IconMoreHorizontal;
