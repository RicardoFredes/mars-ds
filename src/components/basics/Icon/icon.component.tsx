import classNames from "classnames";
import { IconProps, IconSizes } from "./";
import icons from "./lib";

const Icon = ({ name, size = IconSizes.Medium, className, color, style, ...props }: IconProps) => {
  const Component = icons[name];
  if (!Component) return null;

  const sizeValue = getSize(size);
  const cn = classNames("icon", className);

  return (
    <span {...props} className={cn} style={{ color, ...style }}>
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
