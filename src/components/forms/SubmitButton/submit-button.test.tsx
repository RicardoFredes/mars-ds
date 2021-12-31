import { render } from "@testing-library/react";
import SubmitButton from ".";
import { SubmitButtonProps } from "./submit-button.types";

const makeSut = (props?: SubmitButtonProps) => render(<SubmitButton {...props} />);

describe("<SubmitButton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
