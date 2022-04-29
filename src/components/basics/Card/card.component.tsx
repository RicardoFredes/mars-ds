import type { CardProps } from "./card.types";

import classNames from "classnames";

const Card = ({ children, elevation, className, as, ...props }: CardProps) => {
  const cn = classNames("card", { [`card--elevation-${elevation}`]: elevation }, className);
  const Component: any = as || "div";
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default Card;
