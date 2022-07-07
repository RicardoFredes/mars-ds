import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";

import { render } from "@testing-library/react";

import ConsoleListSubItem from "./console-list-sub-item.component";

const testId = "console-list-sub-item";

const defaultProps: ConsoleListSubItemProps = {
  title: "any_title",
};

const makeSut = (props?: ConsoleListSubItemProps) =>
  render(<ConsoleListSubItem {...defaultProps} {...props} />);

describe("<ConsoleListSubItem>", () => {
  it("should render component", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);

    expect(component.className).toBe("console-list-sub-item");
  });

  it("should render component with the active state", () => {
    const { getByTestId } = makeSut({ ...defaultProps, isActive: true });
    const component = getByTestId(testId);

    expect(component.className).toBe("console-list-sub-item console-list-sub-item--is-active");
  });

  it("should render component with the unanswered state", () => {
    const { getByTestId } = makeSut({ ...defaultProps, showAnswer: true, isAnswered: false });
    const component = getByTestId(testId);

    expect(component.className).toBe("console-list-sub-item console-list-sub-item--is-unanswered");
  });

  describe("when it's answered", () => {
    it("should render component with the answered state, whether the answer is correct or not", () => {
      const { getByTestId } = makeSut({ ...defaultProps, isAnswered: true });
      const component = getByTestId(testId);

      expect(component.className).toContain(
        "console-list-sub-item console-list-sub-item--is-answered "
      );
    });

    it("should render component with the answered AND active state, whether the answer is correct or not", () => {
      const { getByTestId } = makeSut({ ...defaultProps, isActive: true, isAnswered: true });
      const component = getByTestId(testId);

      expect(component.className).toContain(
        "console-list-sub-item console-list-sub-item--is-answered-and-active"
      );
    });

    describe("when the answer is WRONG", () => {
      it("should render component with the answered state", () => {
        const { getByTestId } = makeSut({ ...defaultProps, showAnswer: true, isAnswered: true });
        const component = getByTestId(testId);

        expect(component.className).toBe(
          "console-list-sub-item console-list-sub-item--is-answered console-list-sub-item--is-wrong"
        );
      });

      it("should render component with the answered AND active state", () => {
        const { getByTestId } = makeSut({
          ...defaultProps,
          isActive: true,
          showAnswer: true,
          isAnswered: true,
        });
        const component = getByTestId(testId);

        expect(component.className).toBe(
          "console-list-sub-item console-list-sub-item--is-answered-and-active console-list-sub-item--is-wrong"
        );
      });
    });

    describe("when the answer is CORRECT", () => {
      it("should render component with the answered state", () => {
        const { getByTestId } = makeSut({
          ...defaultProps,
          showAnswer: true,
          isAnswered: true,
          isCorrect: true,
        });
        const component = getByTestId(testId);

        expect(component.className).toBe(
          "console-list-sub-item console-list-sub-item--is-answered console-list-sub-item--is-correct"
        );
      });

      it("should render component with the answered AND active state", () => {
        const { getByTestId } = makeSut({
          ...defaultProps,
          isActive: true,
          showAnswer: true,
          isAnswered: true,
          isCorrect: true,
        });
        const component = getByTestId(testId);

        expect(component.className).toBe(
          "console-list-sub-item console-list-sub-item--is-answered-and-active console-list-sub-item--is-correct"
        );
      });
    });
  });
});
