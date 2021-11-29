import type { IconLibProps } from "../icon.types";

const IconFacebook = ({ height = 24, width = 24 }: IconLibProps) => {
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
        d="M13.397 20.9972V12.8012H16.162L16.573 9.59217H13.397V7.54817C13.397 6.62217 13.655 5.98817 14.984 5.98817H16.668V3.12717C15.8487 3.03936 15.0251 2.99696 14.201 3.00017C11.757 3.00017 10.079 4.49217 10.079 7.23117V9.58617H7.33203V12.7952H10.085V20.9972H13.397Z"
        fill="#2C75E7"
      />
    </svg>
  );
};

export default IconFacebook;
