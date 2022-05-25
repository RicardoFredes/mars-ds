import type { ToggleDropdownProps } from "./toggle-dropdown.types";

import { render } from "@testing-library/react";

import ToggleDropdown from "./toggle-dropdown.component";

const defaultProps = {
  list: [],
};

const makeSut = (props?: ToggleDropdownProps) =>
  render(<ToggleDropdown {...defaultProps} {...props} />);

describe("<ToggleDropdown>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });
});
