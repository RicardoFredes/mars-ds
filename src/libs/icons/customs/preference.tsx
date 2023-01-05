import type { IconLibProps } from "@/libs/icons/icons.types";

const Preference = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.23 9.37H20.32C21.2495 9.3755 22 10.1305 22 11.06V13C21.9952 13.901 21.2805 14.6378 20.38 14.67H19.29C19.1589 14.6811 19.046 14.7667 19 14.89C18.927 15.0025 18.927 15.1475 19 15.26L19.73 15.99C20.0457 16.3035 20.2233 16.7301 20.2233 17.175C20.2233 17.6199 20.0457 18.0465 19.73 18.36L18.39 19.7C18.0801 20.0189 17.6546 20.1991 17.21 20.2C16.7635 20.1941 16.3367 20.0148 16.02 19.7L15.26 18.93C15.1475 18.857 15.0025 18.857 14.89 18.93C14.74 18.99 14.63 19.09 14.63 19.23V20.32C14.6245 21.2495 13.8695 22 12.94 22H11.05C10.1451 22.0006 9.40232 21.2843 9.37 20.38V19.29C9.35895 19.1589 9.27326 19.046 9.15 19C9.02506 18.9199 8.86494 18.9199 8.74 19L7.97 19.74C7.65648 20.0557 7.22994 20.2333 6.785 20.2333C6.34006 20.2333 5.91352 20.0557 5.6 19.74L4.26 18.38C3.93962 18.067 3.75931 17.6379 3.76 17.19C3.76586 16.7435 3.94517 16.3167 4.26 16L5.07 15.26C5.14298 15.1475 5.14298 15.0025 5.07 14.89C5.01 14.74 4.91 14.63 4.77 14.63H3.68C2.75055 14.6245 1.99998 13.8695 2 12.94V11.05C2 10.1222 2.75216 9.37 3.68 9.37H4.71C4.84109 9.35895 4.95403 9.27326 5 9.15C5.08005 9.02506 5.08005 8.86494 5 8.74L4.26 8C3.93494 7.68539 3.75142 7.25237 3.75142 6.8C3.75142 6.34763 3.93494 5.91461 4.26 5.6L5.63 4.26C5.9399 3.94115 6.36536 3.76087 6.81 3.76C7.25653 3.76586 7.68328 3.94517 8 4.26L8.74 5.07C8.85254 5.14298 8.99746 5.14298 9.11 5.07C9.26 5.01 9.37 4.91 9.37 4.77V3.68C9.3755 2.75055 10.1305 1.99998 11.06 2H13C13.9083 2.02704 14.6304 2.77134 14.63 3.68V4.71C14.6411 4.84109 14.7267 4.95403 14.85 5C14.9749 5.08005 15.1351 5.08005 15.26 5L16.03 4.26C16.3435 3.94428 16.7701 3.76672 17.215 3.76672C17.6599 3.76672 18.0865 3.94428 18.4 4.26L19.74 5.63C20.0594 5.94362 20.2396 6.37235 20.24 6.82C20.2414 7.2651 20.0608 7.69143 19.74 8L18.93 8.74C18.857 8.85254 18.857 8.99746 18.93 9.11C18.99 9.26 19.09 9.37 19.23 9.37ZM8.76642 13.3394C9.30816 14.6473 10.5844 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.5844 14.6473 9.30816 13.3394 8.76642C12.0315 8.22469 10.5261 8.52413 9.52513 9.52513C8.52413 10.5261 8.22469 12.0315 8.76642 13.3394Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Preference;