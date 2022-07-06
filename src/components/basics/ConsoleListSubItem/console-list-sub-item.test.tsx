import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";

import { render } from "@testing-library/react";

import ConsoleListSubItem from "./console-list-sub-item.component";

const defaultProps: ConsoleListSubItemProps = {
  title: "any_title",
};

const makeSut = (props?: ConsoleListSubItemProps) =>
  render(<ConsoleListSubItem {...defaultProps} {...props} />);

describe("<ConsoleListSubItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
