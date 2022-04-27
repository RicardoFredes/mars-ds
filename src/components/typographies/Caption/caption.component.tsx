import type { CaptionProps } from "./caption.types";

import classNames from "classnames";

const Caption = ({ as, children, className, ...props }: CaptionProps) => {
  const CaptionTag: React.ElementType | string = as || "span";
  const cn = classNames("caption", className);

  return (
    <CaptionTag className={cn} {...props}>
      {children}
    </CaptionTag>
  );
};

export default Caption;
