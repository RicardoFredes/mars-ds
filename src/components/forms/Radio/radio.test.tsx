import { render, fireEvent } from "@testing-library/react";
import { RadioProps } from ".";
import Radio from "./radio.component";

const defaultProps = {
  label: "Radio 1",
  value: 1,
};

const makeSut = (props?: Partial<RadioProps>) => render(<Radio {...defaultProps} {...props} />);

describe("<Radio>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render component with the provided props: label", () => {
    const label = "Radio 2";
    const { getByLabelText } = makeSut({ label });
    getByLabelText(label);
  });

  it("should render component with the provided props: disabled", () => {
    const { getByLabelText } = makeSut({ disabled: true });
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("disabled", true);
  });

  it("should render component with the provided props: defaultChecked", () => {
    const { getByLabelText } = makeSut({ defaultChecked: true });
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("checked", true);
  });

  it("should render component with the provided props: value", () => {
    const value = "any_value";
    const { getByLabelText } = makeSut({ value });
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("value", value);
  });

  it(`should put "radio--is-disabled" className in component if disabled`, () => {
    const dataTestid = "radio";
    const className = "radio radio--is-disabled";
    const { getByTestId } = makeSut({ disabled: true });
    const component = getByTestId(dataTestid);
    expect(component).toHaveProperty("className", className);
  });

  it("should set the component to checked if then initial state is unchecked when clicked", () => {
    const { getByLabelText } = makeSut();
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("checked", false);

    fireEvent.click(radio);
    expect(radio).toHaveProperty("checked", true);
  });

  it("should NOT change state if component is checked when clicked", () => {
    const { getByLabelText } = makeSut({ defaultChecked: true });
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("checked", true);

    fireEvent.click(radio);
    expect(radio).toHaveProperty("checked", true);
  });

  it("should NOT change state if component is disabled when clicked", () => {
    const { getByLabelText } = makeSut({ disabled: true });
    const radio = getByLabelText(defaultProps.label);
    expect(radio).toHaveProperty("checked", false);

    fireEvent.click(radio);
    expect(radio).toHaveProperty("checked", false);
  });
});
