/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { SelectFieldOption, SelectFieldProps } from "./select-field.types";
import classNames from "classnames";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

import TextField from "../TextField/text-field.component";
import DropdownMenu from "../../DropdownMenu/dropdown-menu.component";
import Text from "../../typographic/Text/text.component";

import { generateHash } from "@/services/hash";
import { mathQuery } from "@/services/compare";

const emptyOption: SelectFieldOption = { label: "", value: undefined };

const SelectField = ({
  options = [],
  defaultOption,
  onClick,
  className,
  onSelect,
  ...props
}: SelectFieldProps) => {
  const [key, setKey] = useState(generateHash("key"));
  const [option, setOption] = useState(defaultOption || emptyOption);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selectFieldRef = useRef(null);

  const close = () => {
    window.removeEventListener("click", close);
    setIsOpen(false);
    setQuery("");
    setKey(generateHash("key"));
  };
  const open = () => {
    window.addEventListener("click", close);
    setIsOpen(true);
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    open();
    onClick?.(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSetOption = (option: SelectFieldOption) => {
    onSelect?.(option);
    setOption(option);
    close();
  };

  const getInputElement = () => {
    if (!selectFieldRef.current) return null;
    const element = selectFieldRef.current as HTMLDivElement;
    return element.querySelector("input") || null;
  };

  const dropdownMenuList = options
    .map(({ label, value }) => ({
      label,
      onClick: () => handleSetOption({ label, value }),
      className: "select-field__options-item",
    }))
    .filter(({ label }) => mathQuery(query, label));

  const rightIconButton = {
    name: "chevron-down",
    onClick: () => {
      if (isOpen) return close();
      getInputElement()?.focus();
      open();
    },
  };

  const cn = classNames("select-field", className, {
    "select-field--is-open": isOpen,
  });

  const handleClickToProtectArea = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <div className={cn} ref={selectFieldRef}>
      <div onClick={handleClickToProtectArea}>
        <TextField
          {...props}
          dataKey={key}
          onClick={handleClick}
          onChange={handleChange}
          rightIconButton={rightIconButton}
          value={option.label}
        />
      </div>
      {isOpen && (
        <DropdownMenu list={dropdownMenuList} className="select-field__options">
          {dropdownMenuList.length === 0 && (
            <Text className="select-field__options-fallback">Nenhum item encontrado</Text>
          )}
        </DropdownMenu>
      )}
    </div>
  );
};

export default SelectField;
