import classNames from "classnames";
import { TextProps, TextSizes } from ".";

const Text = ({ as, children, className, size = TextSizes.Medium, ...props }: TextProps) => {
  const cn = classNames("text", `text--size-${size}`, className);
  const TextTag = as || "p";
  return (
    <TextTag className={cn} {...props}>
      {children}
    </TextTag>
  );
};

export default Text;
