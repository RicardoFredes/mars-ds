import type { TextBaseProps } from "./text-base.types";

import { sanitize } from "@/services/sanitize";

const TextBase = ({ children, ...props }: TextBaseProps) => {
  const isComplexChildren = typeof children === "object" && (children?.children || children?.html);
  if (isComplexChildren) return <_TextBase {...props} {...children} />;
  return <_TextBase {...props}>{children}</_TextBase>;
};

const _TextBase = ({ as, children, html, ...props }: TextBaseProps) => {
  const defaultElement = "p";
  const Component = as || defaultElement;

  if (html && typeof html === "string") {
    return <Component {...props} dangerouslySetInnerHTML={{ __html: sanitize(html) }} />;
  }

  return <Component {...props}>{children}</Component>;
};

export default TextBase;
