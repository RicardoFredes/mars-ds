import type { TextProps } from "./text.types";

import classNames from "classnames";

import TextBase from "../../primitives/TextBase/text-base.component";
import { TextSizes } from "./text.types";

const Text = ({ as = "p", children, className, size = TextSizes.Medium, ...props }: TextProps) => {
  const cn = classNames("text", `text--size-${size}`, className);
  return (
    <TextBase as={as} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Text;
