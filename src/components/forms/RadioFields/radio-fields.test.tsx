import { render } from "@testing-library/react";
import RadioFields from ".";
import { RadioFieldsProps } from "./radio-fields.types";

const makeSut = (props?: RadioFieldsProps) => render(<RadioFields {...props} />);

describe("<RadioFields>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
