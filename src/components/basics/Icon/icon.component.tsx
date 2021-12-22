import classNames from "classnames";
import { IconProps, IconSizes } from "./";
import icons from "./lib";

const Icon = ({ name, size = IconSizes.Medium, className, ...props }: IconProps) => {
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

const getSize = (size: string) => {
  switch (size) {
    case IconSizes.Large:
      return 32;
    case IconSizes.Small:
      return 16;
    case IconSizes.Medium:
    default:
      return 24;
  }
};

export default Icon;
