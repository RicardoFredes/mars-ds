import { render } from "@testing-library/react";
import AccordionStatus from ".";
import { AccordionStatusProps, IconVariants } from "./accordion-status.types";

const makeSut = (props?: AccordionStatusProps) =>
  render(<AccordionStatus icon={IconVariants.complete} title="Accordion Status" {...props} />);

describe("<AccordionStatus>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
