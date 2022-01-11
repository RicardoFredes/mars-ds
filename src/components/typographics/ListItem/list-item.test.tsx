import { render } from "@testing-library/react";
import ListItem from ".";
import { ListItemProps } from "./list-item.types";

const makeSut = (props?: ListItemProps) => render(<ListItem {...props} />);

describe("<ListItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
