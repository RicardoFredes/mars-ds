import type { AccordionStatusProps } from "./accordion-status.types";

import { render } from "@testing-library/react";

import AccordionStatus from "./accordion-status.component";
import { IconVariants } from "./accordion-status.types";

const makeSut = (props?: AccordionStatusProps) =>
  render(<AccordionStatus icon={IconVariants.complete} title="Accordion Status" {...props} />);

describe("<AccordionStatus>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
