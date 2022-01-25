import type { ProgressIndicatorProps } from "./progress-indicator.types";

import { render } from "@testing-library/react";

import ProgressIndicator from "./progress-indicator.component";

const PROPS = { FETCHING: false, FETCHED: false, TEST_ID: "progress-indicator" };

const defaultProps: ProgressIndicatorProps = {
  fetching: PROPS.FETCHING,
  fetched: PROPS.FETCHED,
};

const makeSut = (props?: ProgressIndicatorProps) =>
  render(<ProgressIndicator data-testid={PROPS.TEST_ID} {...defaultProps} {...props} />);

describe("<ProgressIndicator>", () => {
  it("should render component", () => {
    const { getByTestId } = makeSut();
    const component = getByTestId(PROPS.TEST_ID);
    expect(component.className).toContain("progress-indicator");
  });

  describe("should have the correct classes", () => {
    it("when fetching", () => {
      const { getByTestId } = makeSut({ fetching: true });
      const component = getByTestId(PROPS.TEST_ID);
      expect(component.className).toContain("progress-indicator--is-fetching");
    });

    it("when fetched", () => {
      const { getByTestId } = makeSut({ fetched: true });
      const component = getByTestId(PROPS.TEST_ID);
      expect(component.className).toContain("progress-indicator--is-fetched");
    });
  });
});
