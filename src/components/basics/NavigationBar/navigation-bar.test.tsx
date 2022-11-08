import type { NavigationBarProps } from "./navigation-bar.types";

import { render } from "@testing-library/react";

import NavigationBar from "./navigation-bar.component";
import { navigationBarMockedData } from "./navigation-bar.mock";

const makeSut = (props: NavigationBarProps) => render(<NavigationBar {...props} />);

describe("<NavigationBar>", () => {
  it("should render component", () => {
    const wrapper = makeSut(navigationBarMockedData);
    expect(wrapper).toBeTruthy();
  });
});
