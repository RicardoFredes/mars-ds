import type { ConsoleListGroupProps } from "./console-list-group.types";

import { render } from "@testing-library/react";

import ConsoleListGroup from "./console-list-group.component";

const defaultProps: ConsoleListGroupProps = {
  title: "any_title",
  LinkComponent: "a",
  list: [
    {
      title: "any_child_title",
    },
  ],
};

const makeSut = (props?: ConsoleListGroupProps) =>
  render(<ConsoleListGroup {...defaultProps} {...props} />);

describe("<ConsoleListGroup>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
