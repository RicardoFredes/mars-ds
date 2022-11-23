import type { ItemCheckboxGroupProps } from "./item-checkbox-group.types";

import { render } from "@testing-library/react";

import ItemCheckboxGroup from "./item-checkbox-group.component";

const makeSut = (props?: ItemCheckboxGroupProps) => render(<ItemCheckboxGroup {...props} />);

describe("<ItemCheckboxGroup>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should self check when all items are true", () => {
    const { getByTestId } = makeSut({
      list: [{ checked: true }, { checked: true }, { checked: true }],
    });
    const input = getByTestId("item-checkbox-input") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("should NOT self check when all items aren't true", () => {
    const { getByTestId } = makeSut({
      list: [{ checked: true }, { checked: false }, { checked: true }],
    });
    const input = getByTestId("item-checkbox-input") as HTMLInputElement;
    expect(input.checked).toBe(false);
  });
});
