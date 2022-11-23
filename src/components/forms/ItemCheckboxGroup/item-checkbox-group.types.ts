import type { ItemCheckboxProps } from "../ItemCheckbox/item-checkbox.types";

export interface ItemCheckboxGroupProps extends Omit<ItemCheckboxProps, "list"> {
  list?: ItemCheckboxProps[];
}
