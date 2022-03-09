import type { ListItemProps } from "./list-item.types";

import { render } from "@testing-library/react";

import ListItem from "./list-item.component";

const makeSut = (props?: ListItemProps) => render(<ListItem {...props} />);

describe("<ListItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
