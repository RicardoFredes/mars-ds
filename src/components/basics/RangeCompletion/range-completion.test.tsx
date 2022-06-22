import type { RangeCompletionProps } from "./range-completion.types";

import { render, waitFor } from "@testing-library/react";

import RangeCompletion from "./range-completion.component";

const makeSut = (props?: RangeCompletionProps) => render(<RangeCompletion {...props} />);

describe("<RangeCompletion>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });

  it('should put "checked" className if receive any valid value', () => {
    const value = 2;
    const wrapper = makeSut({ value });

    const elements = wrapper.getAllByTestId("is-completed");
    expect(elements).toHaveLength(value);
  });

  it('should return the same amount of elements as the "total" value', () => {
    const total = 5;
    const wrapper = makeSut({ total });
    const elements = wrapper.getAllByTestId("is-empty");
    expect(elements).toHaveLength(total);
  });

  it('should show a "label" value', async () => {
    const label = "any_label";
    const wrapper = makeSut({ label });
    wrapper.getByText(label);
    await waitFor(() => {
      const element = wrapper.queryByText("Dificuldade:");
      expect(element).not.toBeInTheDocument();
    });
  });
});
