import { DropdownMenuProps } from "./";
import classNames from "classnames";
import Card, { CardElevations } from "@/components/basics/Card";
import DropdownMenuItem from "./dropdown-menu-item.component";

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
