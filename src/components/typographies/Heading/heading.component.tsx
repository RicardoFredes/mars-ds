import type { HeadingProps } from "./heading.types";

import classNames from "classnames";

import TextBase from "../../primitives/TextBase/text-base.component";
import { HeadingSizes } from "./heading.types";

const Heading = ({
  as,
  children,
  className,
  level = 1,
  size = HeadingSizes.Medium,
  ...props
}: HeadingProps) => {
  const cn = classNames("heading", `heading--size-${size}`, className);
  return (
    <TextBase className={cn} as={as || `h${level}`} {...props}>
      {children}
    </TextBase>
  );
};

export default Heading;
