import type { TextProps } from "./text.types";

import classNames from "classnames";

import TextBase from "../TextBase/text-base.component";
import { TextSizes } from "./text.types";

const Text = ({ as, children, className, size = TextSizes.Medium, ...props }: TextProps) => {
  const cn = classNames("text", `text--size-${size}`, className);
  return (
    <TextBase as={as || "p"} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Text;
