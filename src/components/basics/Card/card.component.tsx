import { CardProps } from "./";

import classNames from "classnames";

const Card = ({ children, elevation, className, ...props }: CardProps) => {
  const cn = classNames("card", { [`card--elevation-${elevation}`]: elevation }, className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Card;
