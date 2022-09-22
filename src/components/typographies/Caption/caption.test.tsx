import type { CaptionProps } from "./caption.types";

import { render } from "@testing-library/react";

import Caption from "./caption.component";

const makeSut = (props?: CaptionProps) => render(<Caption {...props} />);

describe("<Caption>", () => {
  it("should accept children", () => {
    const children = "any_children";
    const { getByText } = makeSut({ children });
    getByText(children);
  });

  it("should render html", () => {
    const html = "<b>any_html_with_b_tag</b>";
    const { getByText, container } = makeSut({ html });
    getByText("any_html_with_b_tag");
    const b = container.querySelector("b");
    expect(b).toBeTruthy();
  });

  it("should can morph", () => {
    const { container } = makeSut({ as: "i" });
    const i = container.querySelector("i");
    expect(i).toBeTruthy();
  });
});
