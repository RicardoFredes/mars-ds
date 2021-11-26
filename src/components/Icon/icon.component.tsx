import type { IconProps } from "./icon.types";

import { Sizes } from "@/types";
import icons from "./lib";

const Icon = ({ name, size = Sizes.Medium, ...props }: IconProps) => {
  const Component = icons[name];
  if (!Component) return null;
  const sizeValue = getSize(size)
  return (
    <span {...props}>
      <Component height={sizeValue} width={sizeValue} />
    </span>
  );
};

const getSize = (size: Sizes) => {
  switch (size) {
    case Sizes.Large:
      return 32;
    case Sizes.Small:
      return 16;
    case Sizes.Medium:
    default:
      return 24
  }
};

export default Icon;
