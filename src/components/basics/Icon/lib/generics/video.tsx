import type { IconLibProps } from "../../icon.types";

const IconVideo = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7.15C20.3789 6.87035 19.6509 6.98841 19.15 7.45L17 9.45V8C17 6.34315 15.6569 5 14 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V14.55L19.16 16.55C19.478 16.8378 19.8911 16.9981 20.32 17C20.558 16.9994 20.7932 16.9483 21.01 16.85C21.6133 16.606 22.0087 16.0208 22.01 15.37V8.63C22.007 7.97674 21.6072 7.39089 21 7.15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconVideo;