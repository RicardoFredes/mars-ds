import type { AccordionLabelProps } from "./accordion-label.types";

import { render } from "@testing-library/react";

import AccordionLabel from "./accordion-label.component";

const makeSut = (props?: AccordionLabelProps) =>
  render(<AccordionLabel title="Accordion Label" label="-30.00" colorLabel="#ed4343" {...props} />);

describe("<AccordionLabel>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
