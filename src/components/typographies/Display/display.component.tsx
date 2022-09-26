import type { DisplayProps } from "./display.types";

import classNames from "classnames";

import TextBase from "../../primitives/TextBase/text-base.component";
import { DisplaySizes } from "./display.types";

const Display = ({
  as,
  children,
  className,
  level = 1,
  size = DisplaySizes.Medium,
  ...props
}: DisplayProps) => {
  const cn = classNames("display", `display--size-${size}`, className);
  return (
    <TextBase as={as || `h${level}`} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Display;
