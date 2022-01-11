import { render } from "@testing-library/react";
import PasswordStrongField from ".";
import { PasswordStrongFieldProps } from "./password-strong-field.types";

const makeSut = (props?: PasswordStrongFieldProps) =>
  render(<PasswordStrongField label="Senha" {...props} />);

describe("<PasswordStrongField>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
