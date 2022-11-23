import type { ItemCheckboxGroupProps } from "./item-checkbox-group.types";

import classNames from "classnames";

import ItemCheckbox from "../ItemCheckbox/item-checkbox.component";

const ItemCheckboxGroup = ({ className, list, ...props }: ItemCheckboxGroupProps) => {
  const cn = classNames("item-checkbox-group", className);
  const isAllChecked = list?.every((value) => value.checked) ?? false;
  return (
    <ItemCheckbox
      className={cn}
      checked={isAllChecked}
      data-testid="item-checkbox-group"
      {...props}
    />
  );
};

export default ItemCheckboxGroup;
