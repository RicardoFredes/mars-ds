/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { SelectFieldOption, SelectFieldProps } from "./select-field.types";
import classNames from "classnames";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

import TextField from "../TextField/text-field.component";
import DropdownMenu from "../../DropdownMenu/dropdown-menu.component";
import Text from "../../typographic/Text/text.component";

import { generateHash } from "@/services/hash";
import { mathQuery } from "@/services/compare";

const emptyOption: SelectFieldOption = { label: "", value: undefined };
const ITEM_CLASS_NAME = "select-field__options-item";

const SelectField = ({
  options = [],
  defaultOption,
  onClick,
  className,
  onSelect,
  enableFilter = true,
  ...props
}: SelectFieldProps) => {
  const [isDropdownAbove, setIsDropdownAbove] = useState(false);
  const [option, setOption] = useState(defaultOption || emptyOption);
  const [key, setKey] = useState(generateHash("key"));
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selectFieldRef = useRef(null);
  const inputDisabled = !enableFilter;

  const getInputElement = () => {
    if (!selectFieldRef.current) return null;
    return (selectFieldRef.current as HTMLDivElement)?.querySelector("input");
  };

  const addEventListener = () => {
    window.addEventListener("click", close);
    window.addEventListener("keydown", handleKeyDown);
  };

  const removeEventListener = () => {
    window.removeEventListener("click", close);
    window.removeEventListener("keydown", handleKeyDown);
  };

  const close = () => {
    removeEventListener();
    setIsOpen(false);
    setQuery("");
    setKey(generateHash("key"));
  };

  const open = () => {
    if (isOpen) return;
    addEventListener();
    setIsOpen(true);
  };

  const handleSetIsAbove = () => {
    if (!selectFieldRef.current) return;
    const containerBounding = (selectFieldRef.current as HTMLDivElement)
      .querySelector(".select-field__options")
      ?.getBoundingClientRect();
    const containerHeight = containerBounding?.height || 0;
    const containerTop = containerBounding?.top || 0;
    const inputTop = getInputElement()?.getBoundingClientRect().top || 0;
    const sum = containerHeight + inputTop;
    const hasSpaceAbove = sum > window.innerHeight && containerTop > 0;
    setIsDropdownAbove(hasSpaceAbove);
  };

  useEffect(() => {
    if (isOpen) handleSetIsAbove();
  }, [isOpen]);

  useEffect(() => close, []);

  const getElementOptionItems = () => {
    const emptyResponse = {
      elements: [],
      activeElement: null,
    };
    if (!selectFieldRef.current) return emptyResponse;
    const containerElement = selectFieldRef.current as HTMLDivElement;
    if (!containerElement) return emptyResponse;
    return {
      elements: containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`),
      activeElement: containerElement.querySelector(`.${ITEM_CLASS_NAME}:focus`),
    };
  };

  const focusElement = ({ isDown = false, toLimit = false }) => {
    const { elements, activeElement } = getElementOptionItems();

    if (toLimit) {
      const newPosition = isDown ? elements.length - 1 : 0;
      (elements[newPosition] as HTMLElement).focus();
      return;
    }

    let position = -1;
    if (activeElement) {
      for (const index in elements) {
        if (elements[index] === activeElement) {
          position = Number(index);
          break;
        }
      }
    }

    isDown ? position++ : position--;
    if (position >= elements.length) return;

    const itemElement = elements[position];
    if (itemElement) (itemElement as HTMLElement).focus();
  };

  const setElementOption = () => {
    const { activeElement } = getElementOptionItems();
    if (!activeElement) return close();
    const value = activeElement.getAttribute("aria-valuetext");
    const option = options.find((option) => option.value == value);
    if (option) return handleSetOption(option);
    return close();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const isOutsideInput = event.target !== getInputElement();
    if (isOutsideInput || event.key === "Tab") event.preventDefault();
    switch (event.key) {
      case "Escape":
        return close();
      case "ArrowDown":
        return focusElement({ isDown: true });
      case "ArrowUp":
        return focusElement({ isDown: false });
      case "Tab":
        return focusElement({ isDown: !event.shiftKey });
      case "Enter":
        return setElementOption();
      case "Home":
        if (isOutsideInput) return focusElement({ isDown: false, toLimit: true });
        return;
      case "End":
        if (isOutsideInput) return focusElement({ isDown: true, toLimit: true });
        return;
      default:
        return;
    }
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

  const dropdownMenuList = options
    .map(({ label, value }) => ({
      label,
      "onClick": () => handleSetOption({ label, value }),
      "className": ITEM_CLASS_NAME,
      "aria-valuetext": value,
    }))
    .filter(({ label }) => mathQuery(query, label));

  const rightIconButton = {
    name: "chevron-down",
    className: "select-field__toggle-icon",
    onClick: () => {
      if (isOpen) return close();
      getInputElement()?.focus();
      open();
    },
  };

  const cn = classNames("select-field", className, [
    { "select-field--is-open": isOpen },
    { "select-field--is-dropdown-above": isDropdownAbove },
    { "select-field--has-filter": enableFilter },
  ]);

  const handleClickToProtectArea = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (inputDisabled) open();
  };

  return (
    <div className={cn} ref={selectFieldRef}>
      <div onClick={handleClickToProtectArea}>
        <TextField
          {...props}
          className={classNames({ "field--is-focused": isOpen })}
          inputDisabled={inputDisabled}
          dataKey={key}
          onClick={handleClick}
          onChange={handleChange}
          rightIconButton={rightIconButton}
          value={option.label}
        />
      </div>
      {isOpen && (
        <DropdownMenu
          list={dropdownMenuList}
          className="select-field__options"
          onClick={(event) => event.stopPropagation()}
        >
          {dropdownMenuList.length === 0 && (
            <Text className="select-field__options-fallback">Nenhum item encontrado</Text>
          )}
        </DropdownMenu>
      )}
    </div>
  );
};

export default SelectField;
