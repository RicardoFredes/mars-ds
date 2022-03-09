import type { PasswordStrongFieldProps } from "./password-strong-field.types";

import { render } from "@testing-library/react";

import PasswordStrongField from "./password-strong-field.component";

const makeSut = (props?: PasswordStrongFieldProps) =>
  render(<PasswordStrongField label="Senha" {...props} />);

describe("<PasswordStrongField>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
