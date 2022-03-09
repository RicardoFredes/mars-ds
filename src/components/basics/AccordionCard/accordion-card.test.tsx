import type { AccordionCardProps } from "./accordion-card.types";

import { render } from "@testing-library/react";

import AccordionCard from "./accordion-card.component";
import { AccordionCardElevations } from "./accordion-card.types";

const PROPS = {
  TITLE: "any_title",
  TEXT: "any_text",
  TEST_ID: "accordion-card",
};

const elevationTable = Object.entries(AccordionCardElevations).map(([name, elevation]) => ({
  name,
  elevation,
}));

const defaultProps = { title: PROPS.TITLE, children: PROPS.TEXT };

const makeSut = (props?: AccordionCardProps) =>
  render(<AccordionCard data-testid={PROPS.TEST_ID} {...defaultProps} {...props} />);

describe("<AccordionCard>", () => {
  it("should render component", () => {
    const { getByText, getByTestId } = makeSut();
    getByText(PROPS.TITLE);
    getByText(PROPS.TEXT);
    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toContain("accordion-card");
  });

  it.each(elevationTable)("should render with $name elevation", ({ elevation }) => {
    const { getByTestId } = makeSut({ elevation });
    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toContain(elevation);
  });
});
