import type { IconProps } from ".";

import classNames from "classnames";

import { IconSizes } from "./icon.types";
import icons from "./lib";

const Icon = ({ name, size = IconSizes.Medium, className, color, style, ...props }: IconProps) => {
  const Component = icons[name];
  if (!Component) return null;

  const sizeValue = getSize(size);
  const cn = classNames("icon", className);

  return (
    <span data-testid={name} {...props} className={cn} style={{ color, ...style }}>
      <Component height={sizeValue} width={sizeValue} />
    </span>
  );
};

const getSize = (size: string) => {
  switch (size) {
    case IconSizes.XLarge:
      return 40;
    case IconSizes.Large:
      return 32;
    case IconSizes.Small:
      return 18;
    case IconSizes.Medium:
    default:
      return 24;
  }
};

export default Icon;
