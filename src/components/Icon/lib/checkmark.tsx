import type { IconLibProps } from "../icon.types";

const IconCheckmark = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.86 18C9.58283 17.9991 9.31847 17.8832 9.13 17.68L4.27 12.51C3.89168 12.1068 3.91183 11.4733 4.315 11.095C4.71816 10.7167 5.35168 10.7368 5.73 11.14L9.85 15.53L18.26 6.33C18.4925 6.04041 18.8664 5.90357 19.231 5.97461C19.5955 6.04565 19.8907 6.31287 19.9975 6.66859C20.1043 7.02431 20.0051 7.40991 19.74 7.67L10.6 17.67C10.4133 17.8769 10.1487 17.9965 9.87 18H9.86Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconCheckmark;
