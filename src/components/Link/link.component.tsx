import type { LinkProps } from "./link.types";

const Link = ({ children, ...props }: LinkProps) => {
  return <a {...props}>{children}</a>;
};

export default Link;
