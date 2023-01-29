import type { AutoScrollProps } from "./auto-scroll.types";

import { render } from "@testing-library/react";

import AutoScroll from "./auto-scroll.component";

const makeSut = (props?: AutoScrollProps) => render(<AutoScroll {...props} />);

describe("<AutoScroll>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
