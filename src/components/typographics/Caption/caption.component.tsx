import classNames from "classnames";
import { CaptionProps } from ".";

const Caption = ({ as, children, className, ...props }: CaptionProps) => {
  const SubtitleTag: React.ElementType | string = as || "caption";
  const cn = classNames("caption", className);

  return (
    <SubtitleTag className={cn} {...props}>
      {children}
    </SubtitleTag>
  );
};

export default Caption;
