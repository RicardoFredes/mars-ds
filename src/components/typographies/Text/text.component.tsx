import type { TextProps } from "./text.types";

import classNames from "classnames";

import { TextSizes } from "./text.types";

const Text = ({ as, children, className, size = TextSizes.Medium, ...props }: TextProps) => {
  const cn = classNames("text", `text--size-${size}`, className);
  const TextTag = as || "p";
  return (
    <TextTag className={cn} {...props}>
      {children}
    </TextTag>
  );
};

export default Text;
