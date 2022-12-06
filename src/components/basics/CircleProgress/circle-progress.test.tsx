import type { CircleProgressProps } from "./circle-progress.types";

import { render } from "@testing-library/react";

import CircleProgress from "./circle-progress.component";

const makeSut = (props: CircleProgressProps) => render(<CircleProgress {...props} />);

const defaultProps = {
  position: 1,
  steps: ["any_step_1", "any_step_2", "any_step_3"],
};

describe("<CircleProgress>", () => {
  test.each([
    { position: 0, expected: "0%" },
    { position: 1, expected: "33%" },
    { position: 2, expected: "67%" },
    { position: 3, expected: "100%" },
  ])("should match percentage (%s)", async ({ position, expected }) => {
    const { findByText } = makeSut({ ...defaultProps, position });
    await findByText(expected);
  });
});
