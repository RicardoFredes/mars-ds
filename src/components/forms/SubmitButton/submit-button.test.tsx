import type { SubmitButtonProps } from "./submit-button.types";

import { render } from "@testing-library/react";

import SubmitButton from "./submit-button.component";

const makeSut = (props?: SubmitButtonProps) => render(<SubmitButton {...props} />);

describe("<SubmitButton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
