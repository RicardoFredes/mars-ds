import type { DividerProps } from "./divider.types";

import { render } from "@testing-library/react";

import Divider from "./divider.component";

const makeSut = (props?: DividerProps) =>
  render(<Divider data-testid={PROPS.TEST_ID} {...defaultProps} {...props} />);

const PROPS = {
  VERTICAL: false,
  TEST_ID: "divider",
};

const defaultProps = { vertical: PROPS.VERTICAL };

describe("<Divider>", () => {
  it("should render component", () => {
    const { getByTestId } = makeSut();

    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toContain("divider");
  });

  it("should have the correct class when vertical", () => {
    const { getByTestId } = makeSut({ vertical: true });

    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toContain("divider--vertical");
  });
});
