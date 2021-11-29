import type { IconLibProps } from "../icon.types";

const IconBankSlip = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M2 5H5V19H2V5ZM7 5H9V19H7V5ZM20 5H22V19H20V5ZM14 5H18V19H14V5ZM10 5H12V19H10V5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconBankSlip;
