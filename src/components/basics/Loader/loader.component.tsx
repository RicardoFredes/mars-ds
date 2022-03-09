import type { LoaderProps } from "./loader.types";

import classNames from "classnames";

import { LoaderSizes } from "./loader.types";

const Loader = ({ className, size = LoaderSizes.Small, color }: LoaderProps) => {
  const cn = classNames("loader", className, { [`loader--${size}`]: size });
  return (
    <div className={cn}>
      <span className="loader__container" style={{ color }} role="progressbar">
        <svg viewBox="22 22 44 44">
          <circle
            className="loader__circle"
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth="3.6"
          ></circle>
        </svg>
      </span>
    </div>
  );
};

export default Loader;
