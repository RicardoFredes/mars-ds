import type { NavigationBarItemProps } from "./navigation-bar-item.types";

import { render } from "@testing-library/react";

import NavigationBarItem from "./navigation-bar-item.component";

const makeSut = (props: NavigationBarItemProps) => render(<NavigationBarItem {...props} />);

describe("<NavigationBarItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut({ iconName: "comment", text: "Comentar" });
    expect(wrapper).toBeTruthy();
  });
});
