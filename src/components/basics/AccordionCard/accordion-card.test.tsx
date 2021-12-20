import AccordionCard from ".";
import { AccordionCardProps } from "./accordion-card.types";

const makeSut = (props?: AccordionCardProps) => <AccordionCard {...props} />;

describe("<AccordionCard>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
