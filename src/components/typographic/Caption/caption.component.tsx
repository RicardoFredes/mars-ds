import classNames from "classnames";
import type { CaptionProps } from "./caption.types";

const Caption = ({ as, children, className, ...props }: CaptionProps) => {
  const SubtitleTag = as || "caption";
<<<<<<< HEAD
  const cn = classNames("caption", className);
=======
  const cn = classNames("caption", classNames);
>>>>>>> 0c9a089 (style: run linter)
  return (
    <SubtitleTag className={cn} {...props}>
      {children}
    </SubtitleTag>
  );
};

export default Caption;
