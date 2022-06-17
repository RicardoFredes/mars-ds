import type { IconLibProps } from "@/libs/icons/icons.types";

const IconChevronDown = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4676 9.76651L11.9955 13.3018L8.52349 9.76651C8.1745 9.41116 7.61074 9.41116 7.26174 9.76651C6.91275 10.1219 6.91275 10.6959 7.26174 11.0513L11.3691 15.2335C11.7181 15.5888 12.2819 15.5888 12.6309 15.2335L16.7383 11.0513C17.0872 10.6959 17.0872 10.1219 16.7383 9.76651C16.3893 9.42027 15.8166 9.41116 15.4676 9.76651Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconChevronDown;
