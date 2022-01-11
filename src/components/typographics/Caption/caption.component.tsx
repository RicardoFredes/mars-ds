import classNames from "classnames";
import { CaptionProps } from ".";

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
