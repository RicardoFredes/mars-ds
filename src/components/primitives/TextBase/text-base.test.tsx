import type { TextBaseProps } from "./text-base.types";

import { render } from "@testing-library/react";

import TextBase from "./text-base.component";

const makeSut = (props?: TextBaseProps) => render(<TextBase {...props} />);

describe("<TextBase>", () => {
  const value = "any_value";

  it("should render string children", () => {
    const { getByText } = makeSut({ children: value });
    getByText(value);
  });

  it("should render html", () => {
    const tag = "b";
    const html = `<${tag}>${value}</${tag}>`;
    const { getByText, container } = makeSut({ html });
    getByText(value);
    const bold = container.querySelector(tag);
    expect(bold).toBeTruthy();
  });

  it("should render custom tag", () => {
    const tag = "i";
    const { container } = makeSut({ as: tag });
    const i = container.querySelector(tag);
    expect(i).toBeTruthy();
  });

  it("should render object children", () => {
    const tag = "i";
    const html = `<${tag}>${value}</${tag}>`;
    const wrapper = makeSut({ children: { html } });
    wrapper.getByText(value);
  });
});
