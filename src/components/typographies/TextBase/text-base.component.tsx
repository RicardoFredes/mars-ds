import type { TextBaseProps } from "./text-base.types";

import classNames from "classnames";

import { sanitize } from "@/services/sanitize";

import { TextBaseSizes } from "./text-base.types";

const TextBase = ({
  as,
  children,
  html,
  className,
  size = TextBaseSizes.Medium,
  ...props
}: TextBaseProps) => {
  const cn = className ? className : classNames("text-base", `text-base--size-${size}`);
  const defaultElement = "p";
  const Component = as || defaultElement;

  if (typeof html === "string" && html) {
    return (
      <Component className={cn} {...props} dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
    );
  }

  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default TextBase;
