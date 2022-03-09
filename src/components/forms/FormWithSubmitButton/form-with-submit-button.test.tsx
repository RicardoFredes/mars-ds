import type { FormWithSubmitButtonProps } from "./form-with-submit-button.types";

import { render } from "@testing-library/react";

import FormWithSubmitButton from "./form-with-submit-button.component";

const makeSut = (props?: FormWithSubmitButtonProps) =>
  render(<FormWithSubmitButton submitButtonLabel="Enviar" {...props} />);

describe("<FormWithSubmitButton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
