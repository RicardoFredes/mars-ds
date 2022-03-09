import type { RadioFieldsProps } from "./radio-fields.types";

import { fireEvent, render } from "@testing-library/react";

import RadioFields from "./radio-fields.component";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

const radioDataTestId = "radio";
const inputDataTestId = "radio-input";

const makeSut = (props?: RadioFieldsProps) => {
  return render(<RadioFields options={options} name="any-name" {...props} />);
};

describe("<RadioFields>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render component with the same number of given options", () => {
    const { getAllByTestId } = makeSut();
    const radioFields = getAllByTestId(radioDataTestId);
    expect(radioFields).toHaveLength(options.length);
  });

  it(`should render component with the same checked option given as "defaultOption"`, () => {
    const defaultOption = options[2];
    const { getAllByTestId } = makeSut({ defaultOption });
    const radioFields = getAllByTestId(inputDataTestId);
    expect(radioFields[0]).toHaveProperty("checked", false);
    expect(radioFields[1]).toHaveProperty("checked", false);
    expect(radioFields[2]).toHaveProperty("checked", true);
    expect(radioFields[3]).toHaveProperty("checked", false);
  });

  it('should disabled all component options when given "disabled" prop', () => {
    const { getAllByTestId } = makeSut({ disabled: true });
    const radioFields = getAllByTestId(inputDataTestId);
    for (const radio of radioFields) {
      expect(radio).toHaveProperty("disabled", true);
    }
  });

  it(`should have the same value for the "name" pro for all component options`, () => {
    const { getAllByTestId } = makeSut();
    const radioFields = getAllByTestId(inputDataTestId);
    for (const radio of radioFields) {
      expect(radio).toHaveProperty("name", "any-name");
    }
  });

  it("should call `onSelect` with the option value", () => {
    const onSelect = jest.fn();
    const { getAllByTestId } = makeSut({ options, onSelect });
    const radioFields = getAllByTestId(inputDataTestId);
    const index = 0;

    const radioTarget = radioFields[index];
    if (!radioTarget) throw new Error("Radio is undefined");

    expect(radioTarget).toHaveProperty("checked", false);

    fireEvent.click(radioTarget);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(options[index]);
    expect(radioTarget).toHaveProperty("checked", true);
  });
});
