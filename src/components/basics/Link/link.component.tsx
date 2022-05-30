import type { LinkProps } from "./link.types";

import classNames from "classnames";
import { useContext } from "react";

import type { ComponentLink } from "@/components/experimental/Linker";
import LinkContext from "@/components/experimental/Linker";

const Link = ({ as, className, children, ...props }: LinkProps) => {
  const cn = classNames("link", className);
  const ComponentLink: ComponentLink = useContext(LinkContext as any);
  const Component = as || ComponentLink || "a";
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default Link;
