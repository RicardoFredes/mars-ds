import type { ItemTextProps } from "./item-text.types";

import { render } from "@testing-library/react";

import ItemText from "./item-text.component";

const makeSut = (props?: ItemTextProps) => render(<ItemText {...props} />);

describe("<ItemText>", () => {
  it("should accept children", () => {
    const children = "any_children";
    const { getByText } = makeSut({ children });
    getByText(children);
  });

  it("should render html", () => {
    const html = "<b>any_html_with_b_tag</b>";
    const { getByText, container } = makeSut({ html });
    getByText("any_html_with_b_tag");
    const bold = container.querySelector("b");
    expect(bold).toBeTruthy();
  });

  it("should can morph", () => {
    const { container } = makeSut({ as: "i" });
    const i = container.querySelector("i");
    expect(i).toBeTruthy();
  });
});
