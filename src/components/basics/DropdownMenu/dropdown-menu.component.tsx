import type { DropdownMenuProps } from "./dropdown-menu.types";

import classNames from "classnames";

import Card, { CardElevations } from "@/components/basics/Card";
import DropdownMenuItem from "@/components/basics/DropdownMenuItem";

const DropdownMenu = ({ className, list = [], children, size, ...props }: DropdownMenuProps) => {
  const cn = classNames("dropdown-menu", className);
  return (
    <Card className={cn} elevation={CardElevations.Medium} {...props}>
      <ul className="dropdown-menu__list">
        {list.map(({ label, children, ...itemProps }, key) => (
          <li key={key} className="dropdown-menu__list-item">
            <DropdownMenuItem size={size} {...itemProps} tabIndex={0}>
              {label || children}
            </DropdownMenuItem>
          </li>
        ))}
      </ul>
      {children}
    </Card>
  );
};

export default DropdownMenu;
