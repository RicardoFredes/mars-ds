import type { ListItemProps } from "./list-item.types";

import { render } from "@testing-library/react";

import ListItem from "./list-item.component";

const makeSut = (props?: ListItemProps) => render(<ListItem {...props} />);

describe("<ListItem>", () => {
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
});
