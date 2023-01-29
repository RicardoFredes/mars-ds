import type { LinkBaseProps } from "./link-base.types";

import { render } from "@testing-library/react";

import LinkBase from "./link-base.component";

const makeSut = (props?: LinkBaseProps) => render(<LinkBase {...props} />);

describe("<LinkBase>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
