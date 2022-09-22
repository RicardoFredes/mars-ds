import type { CaptionProps } from "./caption.types";

import classNames from "classnames";

import TextBase from "../TextBase/text-base.component";

const Caption = ({ as, children, className, ...props }: CaptionProps) => {
  const cn = classNames("caption", className);
  return (
    <TextBase as={as || "span"} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Caption;
