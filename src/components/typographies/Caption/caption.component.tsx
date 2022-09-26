import type { CaptionProps } from "./caption.types";

import classNames from "classnames";

import TextBase from "../../primitives/TextBase/text-base.component";

const Caption = ({ as = "span", children, className, ...props }: CaptionProps) => {
  const cn = classNames("caption", className);
  return (
    <TextBase as={as} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default Caption;
