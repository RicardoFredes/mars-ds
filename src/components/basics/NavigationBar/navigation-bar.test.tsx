import type { NavigationBarProps } from "./navigation-bar.types";

import { render } from "@testing-library/react";

import NavigationBar from "./navigation-bar.component";

const makeSut = (props?: NavigationBarProps) => render(<NavigationBar {...props} />);

describe("<NavigationBar>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
