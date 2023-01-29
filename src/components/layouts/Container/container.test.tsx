import type { ContainerProps } from "./container.types";

import { render } from "@testing-library/react";

import Container from "./container.component";

const makeSut = (props?: ContainerProps) => render(<Container {...props} />);

describe("<Container>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
