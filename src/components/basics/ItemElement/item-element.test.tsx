import type { ItemElementProps } from "./item-element.types";

import { render } from "@testing-library/react";

import ItemElement from "./item-element.component";

const makeSut = (props?: ItemElementProps) => render(<ItemElement {...props} />);

describe("<ItemElement>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
