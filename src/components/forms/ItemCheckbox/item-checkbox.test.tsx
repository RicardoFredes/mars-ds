import type { ItemCheckboxProps } from "./item-checkbox.types";

import { fireEvent, render } from "@testing-library/react";

import ItemCheckbox from "./item-checkbox.component";

const makeSut = (props?: ItemCheckboxProps) => render(<ItemCheckbox {...props} />);

describe("<ItemCheckbox>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should call onChange when state changes", () => {
    const anyFunc = jest.fn(() => null);
    const { getByTestId } = makeSut({ onChange: anyFunc });
    fireEvent.click(getByTestId("item-checkbox-input"));
    expect(anyFunc).toBeCalledTimes(1);
  });

  it("should check on click when unchecked", () => {
    const { getByTestId } = makeSut();
    fireEvent.click(getByTestId("item-checkbox"));
    const inputCheckbox = getByTestId("item-checkbox-input") as HTMLInputElement;
    expect(inputCheckbox.checked).toBe(true);
  });

  it("should uncheck on click when checked", () => {
    const { getByTestId } = makeSut({ defaultChecked: true });
    fireEvent.click(getByTestId("item-checkbox"));
    const inputCheckbox = getByTestId("item-checkbox-input") as HTMLInputElement;
    expect(inputCheckbox.checked).toBe(false);
  });
});
