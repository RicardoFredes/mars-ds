import type { SubtitleProps } from "./subtitle.types";

import classNames from "classnames";

import TextBase from "../TextBase/text-base.component";
import { SubtitleSizes } from "./subtitle.types";

const Subtitle = ({
  as,
  children,
  className,
  level = 3,
  size = SubtitleSizes.Medium,
  ...props
}: SubtitleProps) => {
  const cn = classNames("subtitle", `subtitle--size-${size}`, className);
  return (
    <TextBase as={as || `h${level}`} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Subtitle;
