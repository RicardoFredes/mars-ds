import { LinkProps } from ".";
import classNames from "classnames";

const Link = ({ as, className, children, ...props }: LinkProps) => {
  const cn = classNames("link", className);

  if (shouldGetDefaultComponent(as, props.href)) {
    as = getDefaultComponent();
  }

  const Component = as || "a";
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default Link;

const shouldGetDefaultComponent = (as?: string | React.ElementType, href?: string) => {
  return !as && href && /^http/.test(href);
};

const getDefaultComponent = () => {
  try {
    return require("next/link");
  } catch {
    return "a";
  }
};
