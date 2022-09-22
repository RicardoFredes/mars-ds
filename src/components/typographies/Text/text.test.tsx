import type { TextProps } from "./text.types";

import { render } from "@testing-library/react";

import Text from "./text.component";

const makeSut = (props?: TextProps) => render(<Text {...props} />);

describe("<Text>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
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
