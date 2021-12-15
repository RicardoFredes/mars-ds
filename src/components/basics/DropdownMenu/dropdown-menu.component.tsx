/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import type { DropdownMenuProps } from "./dropdown-menu.types";
import classNames from "classnames";
import Card from "@/components/basics/Card/card.component";
import DropdownMenuItem from "./dropdown-menu-item.component";
import { CardElevations } from "@/components/basics/Card/card.types";

const DropdownMenu = ({ className, list = [], children, ...props }: DropdownMenuProps) => {
  const cn = classNames("dropdown-menu", className);
  return (
    <Card className={cn} elevation={CardElevations.Medium} {...props}>
      <ul>
        {list.map(({ label, children, ...itemProps }, key) => (
          <li key={key}>
            <DropdownMenuItem {...itemProps} tabIndex={0}>
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
