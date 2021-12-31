import { render } from "@testing-library/react";
import FormWithSubmitButton from ".";
import { FormWithSubmitButtonProps } from "./form-with-submit-button.types";

const makeSut = (props?: FormWithSubmitButtonProps) =>
  render(<FormWithSubmitButton submitButtonLabel="Enviar" {...props} />);

describe("<FormWithSubmitButton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
