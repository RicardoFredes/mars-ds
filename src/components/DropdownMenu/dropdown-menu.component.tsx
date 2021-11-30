import type { DropdownMenuProps } from "./dropdown-menu.types";
import { ElevationEnum } from "@/types";
import classNames from "classnames";
import Card from "../Card/card.component";
import DropdownMenuItem from "./dropdown-menu-item.component";

const DropdownMenu = ({ className, list = [], children, ...props }: DropdownMenuProps) => {
  const cn = classNames("dropdown-menu", className);
  return (
    <Card className={cn} elevation={ElevationEnum.High} {...props}>
      {list.map(({ label, children, ...itemProps }, key) => (
        <DropdownMenuItem key={key} {...itemProps}>
          {label || children}
        </DropdownMenuItem>
      ))}
      {children}
    </Card>
  );
};

export default DropdownMenu;
