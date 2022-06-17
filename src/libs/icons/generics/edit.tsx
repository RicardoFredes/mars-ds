import type { IconLibProps } from "@/libs/icons/icons.types";

const IconEdit = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M16.66 4.59998L19.4 7.33998C20.166 8.06975 20.1973 9.28164 19.47 10.05L10.47 19.05C10.144 19.3732 9.71679 19.5745 9.26 19.62L5.09 20H5C4.73419 20.0015 4.47872 19.8972 4.29 19.71C4.07903 19.4998 3.97272 19.2065 4 18.91L4.43 14.74C4.4755 14.2832 4.67676 13.8559 5 13.53L14 4.52998C14.7758 3.87453 15.9197 3.90464 16.66 4.59998ZM13.32 7.99998L16 10.68L18 8.72998L15.27 5.99998L13.32 7.99998Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconEdit;
