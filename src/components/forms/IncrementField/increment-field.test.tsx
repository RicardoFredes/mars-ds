import type { IncrementFieldProps } from "./increment-field.types";

import { fireEvent, render } from "@testing-library/react";

import IncrementField from "./increment-field.component";

const makeSut = (props?: IncrementFieldProps) => render(<IncrementField {...props} />);

describe("<IncrementField>", () => {
  it("should see 17h when start with 15h and increment two times", () => {
    const { getByTestId, getByText } = makeSut({ defaultValue: 15 });
    const incrementButton = getByTestId("increment-button");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    getByText("17h");
  });

  it("should see 13h when start with 15h and decrement two times", () => {
    const { getByTestId, getByText } = makeSut({ defaultValue: 15 });
    const decrementButton = getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    getByText("13h");
  });

  it("should not decrement bellow minimum", () => {
    const { getByTestId, getByText } = makeSut({ min: 15, defaultValue: 16 });
    const decrementButton = getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    getByText("15h");
  });

  it("should not increment above maximum", () => {
    const { getByTestId, getByText } = makeSut({ max: 15, defaultValue: 14 });
    const decrementButton = getByTestId("increment-button");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    getByText("15h");
  });
});
