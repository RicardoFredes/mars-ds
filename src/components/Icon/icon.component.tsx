import type { IconProps } from "./icon.types";

import classNames from "classnames";

import { Sizes, SizesEnum } from "@/types";
import icons from "./lib";

const Icon = ({ name, size = SizesEnum.Medium, className, ...props }: IconProps) => {
  const Component = icons[name];
  if (!Component) return null;

  const sizeValue = getSize(size);
  const cn = classNames("icon", className);

  return (
    <span {...props} className={cn}>
      <Component height={sizeValue} width={sizeValue} />
    </span>
  );
};

const getSize = (size: Sizes) => {
  switch (size) {
    case SizesEnum.Large:
      return 32;
    case SizesEnum.Small:
      return 16;
    case SizesEnum.Medium:
    default:
      return 24;
  }
};

export default Icon;
