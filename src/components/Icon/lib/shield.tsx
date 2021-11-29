import type { IconLibProps } from "../icon.types";

const IconShield = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.85C11.6505 21.8555 11.3058 21.7693 11 21.6L10.7 21.43C5.94272 18.7385 3.00119 13.6959 2.99999 8.23003V8.09003C2.99354 7.36909 3.3756 6.70048 3.99999 6.34003L11 2.40003C11.6188 2.04276 12.3812 2.04276 13 2.40003L20 6.34003C20.6244 6.70048 21.0064 7.36909 21 8.09003V8.23003C20.9947 13.7001 18.045 18.7437 13.28 21.43L12.98 21.6C12.6801 21.7659 12.3427 21.852 12 21.85Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconShield;
