import { HeadingProps, HeadingSizesEnum } from "./heading.types";
import classNames from "classnames";

const Heading = ({
  as,
  children,
  className,
  level = 1,
  size = HeadingSizesEnum.Medium,
  ...props
}: HeadingProps) => {
  const HeadingTag = as || `h${level}`;
  const cn = classNames("heading", `heading--size-${size}`, className);
  return (
    <HeadingTag className={cn} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
