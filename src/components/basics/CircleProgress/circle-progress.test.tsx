import type { CircleProgressProps } from "./circle-progress.types";

import { render } from "@testing-library/react";

import CircleProgress from "./circle-progress.component";

const makeSut = (props: CircleProgressProps) => render(<CircleProgress {...props} />);

const defaultProps = {
  percent: 0,
  steps: ["any_step_1", "any_step_2", "any_step_3"],
};

describe("<CircleProgress>", () => {
  test.each([
    { percent: 0, expected: "0%" },
    { percent: 33, expected: "33%" },
    { percent: 67, expected: "67%" },
    { percent: 50, expected: "50%" },
    { percent: 100, expected: "100%" },
  ])("should match percent (%s)", async ({ percent, expected }) => {
    const { findByText } = makeSut({ ...defaultProps, percent });
    await findByText(expected);
  });
});
