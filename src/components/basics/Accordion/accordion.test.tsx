import Accordion from ".";
import { AccordionProps } from "./accordion.types";

const makeSut = (props?: AccordionProps) => <Accordion {...props} />;

describe("<Accordion>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
