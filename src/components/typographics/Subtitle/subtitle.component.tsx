import classNames from "classnames";
import { SubtitleSizes, SubtitleProps } from ".";

const Subtitle = ({
  as,
  children,
  className,
  level = 3,
  size = SubtitleSizes.Medium,
  ...props
}: SubtitleProps) => {
  const SubtitleTag = as || `h${level}`;
  const cn = classNames("subtitle", `subtitle--size-${size}`, className);
  return (
    <SubtitleTag className={cn} {...props}>
      {children}
    </SubtitleTag>
  );
};

export default Subtitle;
