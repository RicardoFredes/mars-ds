import type { IconLibProps } from "@/libs/icons/icons.types";

const Forum = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6.25H5C4.80109 6.25 4.61032 6.17098 4.46967 6.03033C4.32902 5.88968 4.25 5.69891 4.25 5.5C4.25 5.30109 4.32902 5.11032 4.46967 4.96967C4.61032 4.82902 4.80109 4.75 5 4.75H15C15.1989 4.75 15.3897 4.82902 15.5303 4.96967C15.671 5.11032 15.75 5.30109 15.75 5.5C15.75 5.69891 15.671 5.88968 15.5303 6.03033C15.3897 6.17098 15.1989 6.25 15 6.25Z"
        fill="currentColor"
      />
      <path
        d="M5 10.75H12C12.1989 10.75 12.3897 10.671 12.5303 10.5303C12.671 10.3897 12.75 10.1989 12.75 10C12.75 9.80109 12.671 9.61032 12.5303 9.46967C12.3897 9.32902 12.1989 9.25 12 9.25H5C4.80109 9.25 4.61032 9.32902 4.46967 9.46967C4.32902 9.61032 4.25 9.80109 4.25 10C4.25 10.1989 4.32902 10.3897 4.46967 10.5303C4.61032 10.671 4.80109 10.75 5 10.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 19.75C5.74907 19.7495 5.5008 19.6985 5.27 19.6C4.96787 19.4567 4.71312 19.2299 4.5359 18.9463C4.35868 18.6628 4.26641 18.3344 4.27 18V15.75H3C2.27065 15.75 1.57118 15.4603 1.05546 14.9445C0.539732 14.4288 0.25 13.7293 0.25 13V3C0.25 2.27065 0.539732 1.57118 1.05546 1.05546C1.57118 0.539732 2.27065 0.25 3 0.25H17C17.7293 0.25 18.4288 0.539732 18.9445 1.05546C19.4603 1.57118 19.75 2.27065 19.75 3V13C19.75 13.7293 19.4603 14.4288 18.9445 14.9445C18.4288 15.4603 17.7293 15.75 17 15.75H11.16L7.16 19.31C6.84053 19.5942 6.4276 19.7508 6 19.75ZM3 1.75C2.66848 1.75 2.35054 1.8817 2.11612 2.11612C1.8817 2.35054 1.75 2.66848 1.75 3V13C1.75 13.3315 1.8817 13.6495 2.11612 13.8839C2.35054 14.1183 2.66848 14.25 3 14.25H5C5.19811 14.2526 5.38737 14.3324 5.52747 14.4725C5.66756 14.6126 5.74741 14.8019 5.75 15V18C5.74847 18.0491 5.76203 18.0974 5.78886 18.1386C5.81568 18.1797 5.85447 18.2116 5.9 18.23C5.94069 18.2547 5.98739 18.2678 6.035 18.2678C6.08261 18.2678 6.12931 18.2547 6.17 18.23L10.38 14.48C10.5171 14.3565 10.6955 14.2888 10.88 14.29H17C17.1676 14.2901 17.3335 14.2565 17.4878 14.1912C17.6421 14.1259 17.7817 14.0302 17.8983 13.9099C18.0149 13.7895 18.1062 13.647 18.1666 13.4906C18.227 13.3343 18.2554 13.1675 18.25 13V3C18.25 2.66848 18.1183 2.35054 17.8839 2.11612C17.6495 1.8817 17.3315 1.75 17 1.75H3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Forum;