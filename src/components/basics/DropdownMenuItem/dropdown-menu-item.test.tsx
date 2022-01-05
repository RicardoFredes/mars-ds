import { render } from "@testing-library/react";
import DropdownMenuItem from ".";
import { DropdownMenuItemProps } from "./dropdown-menu-item.types";

const makeSut = (props?: DropdownMenuItemProps) => render(<DropdownMenuItem {...props} />);

describe("<DropdownMenuItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
