import type { CheckboxProps } from "./checkbox.types";

import { fireEvent, render } from "@testing-library/react";

import { ICONS } from "@/configs/icons.config";
import Checkbox from "./checkbox.component";

const DATA_IDS = {
  label: "checkbox-label",
  input: "checkbox-input",
  checkedIcon: ICONS.FORMS.CHECKBOX_CHECKED,
  uncheckedIcon: ICONS.FORMS.CHECKBOX_UNCHECKED,
  checkbox: "checkbox",
};

const makeSut = (props?: CheckboxProps) => {
  return render(<Checkbox {...props} />);
};

describe("<Checkbox />", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render component with the correct iconName when radio ischecked", () => {
    const { getByTestId } = makeSut({ defaultChecked: true });
    getByTestId(DATA_IDS.checkedIcon);
  });

  it("should render component with the correct iconName when radio is unchecked", () => {
    const { getByTestId } = makeSut({ defaultChecked: false });
    getByTestId(DATA_IDS.uncheckedIcon);
  });

  it('should render checked component if it has the prop "defaultChecked" ', () => {
    const { getByTestId } = makeSut({ defaultChecked: true });

    const checkbox = getByTestId(DATA_IDS.checkbox);
    expect(checkbox.className).toContain("checkbox--is-checked");

    const checkboxInput = getByTestId(DATA_IDS.input);
    expect(checkboxInput).toHaveProperty("checked", true);
  });

  it(`should render component with the class disabled if it has the prop disabled`, () => {
    const { getByTestId } = makeSut({ disabled: true });

    const checkbox = getByTestId(DATA_IDS.checkbox);
    expect(checkbox.className).toContain("checkbox--is-disabled");

    const checkboxInput = getByTestId(DATA_IDS.input);
    expect(checkboxInput).toHaveProperty("disabled", true);
  });

  it("should toggle check state on click", () => {
    const { getByTestId } = makeSut();
    const checkboxInput = getByTestId(DATA_IDS.input);

    expect(checkboxInput).toHaveProperty("checked", false);
    fireEvent.click(checkboxInput);
    expect(checkboxInput).toHaveProperty("checked", true);
  });
});
