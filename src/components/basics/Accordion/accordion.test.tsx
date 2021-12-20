jest.mock("@/components/basics/Icon", () => {
  const IconMock = ({ name }: { name: string }) => <>{name}</>;
  return IconMock;
});

import { fireEvent, render } from "@testing-library/react";
import Accordion from "./accordion.component";
import { AccordionProps } from "./accordion.types";

const PROPS = {
  TITLE: "any_title",
  TEXT: "any_text",
  TEST_ID: "any_test_id",
  CONTENT: "accordion-content",
  ICON_NAME: "chevron-down",
};
const defaultProps = { title: PROPS.TITLE };
const makeSut = (props?: AccordionProps) =>
  render(
    <Accordion data-testid={PROPS.TEST_ID} {...defaultProps} {...props}>
      {PROPS.TEXT}
    </Accordion>
  );

describe("<Accordion>", () => {
  it("should render component", () => {
    const { getByText, getByTestId } = makeSut();
    getByText(PROPS.TITLE);
    getByText(PROPS.TEXT);
    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toBe("accordion");
  });

  it("should open accordion", () => {
    const { getByText, getByTestId } = makeSut();
    const header = getByText(PROPS.TITLE);
    const content = getByTestId(PROPS.CONTENT);
    const component = getByTestId(PROPS.TEST_ID);

    expect(component.className).not.toContain("is-open");
    expect(content.style.height).toBe("0px");

    fireEvent.click(header);

    expect(component.className).toContain("is-open");
    expect(content.style.height).toBe("auto");
  });

  it("should close accordion", () => {
    const { getByText, getByTestId } = makeSut({ defaultOpen: true });
    const header = getByText(PROPS.TITLE);
    const content = getByTestId(PROPS.CONTENT);
    const component = getByTestId(PROPS.TEST_ID);

    expect(component.className).toContain("is-open");
    expect(content.style.height).toBe("auto");

    fireEvent.click(header);

    expect(component.className).not.toContain("is-open");
    expect(content.style.height).toBe("0px");
  });

  it('should has "chevron" toggle icon', () => {
    const { getByText } = makeSut({ defaultOpen: true });
    getByText(PROPS.ICON_NAME);
  });
});
