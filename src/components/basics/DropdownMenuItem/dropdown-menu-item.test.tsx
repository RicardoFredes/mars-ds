import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";

import { render } from "@testing-library/react";

import DropdownMenuItem from ".";

const makeSut = (props?: DropdownMenuItemProps) => render(<DropdownMenuItem {...props} />);

describe("<DropdownMenuItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
