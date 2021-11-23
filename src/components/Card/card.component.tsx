import type { CardProps } from "./card.types";

import classNames from "classnames";

import { Elevations } from "../../types";

const Card = ({ children, title, elevation = Elevations.Zero, className, ...props }: CardProps) => {
  const cn = classNames("card", `card--elevation-${elevation}`, className);
  return (
    <div className={cn} {...props}>
      {title && <p className={classNames("card__title")}> {title} </p>}
      {children}
    </div>
  );
};

export default Card;
