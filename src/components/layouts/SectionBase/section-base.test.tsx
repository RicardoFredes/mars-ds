import type { SectionBaseProps } from "./section-base.types";

import { render } from "@testing-library/react";

import SectionBase from "./section-base.component";

const makeSut = (props?: SectionBaseProps) => render(<SectionBase {...props} />);

describe("<SectionBase>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
