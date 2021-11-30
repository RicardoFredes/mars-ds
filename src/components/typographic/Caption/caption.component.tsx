import classNames from "classnames";
import type { CaptionProps } from "./caption.types";

const Caption = ({ as, children, className, ...props }: CaptionProps) => {
  const SubtitleTag = as || "caption";
  const cn = classNames("caption", classNames);
  return (
    <SubtitleTag className={cn} {...props}>
      {children}
    </SubtitleTag>
  );
};

export default Caption;
