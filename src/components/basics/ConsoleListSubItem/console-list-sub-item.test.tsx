import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";

import { render } from "@testing-library/react";

import { ICONS } from "@/configs/icons.config";
import ConsoleListSubItem from "./console-list-sub-item.component";

const testId = "console-list-sub-item";

const defaultProps: ConsoleListSubItemProps = {
  title: "any_title",
};

const wrongIcon = ICONS.STATUS.INCORRECT;
const correctIcon = ICONS.STATUS.CORRECT;

const makeSut = (props?: ConsoleListSubItemProps) =>
  render(<ConsoleListSubItem {...defaultProps} {...props} />);

describe("<ConsoleListSubItem>", () => {
  it("should render component", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);

    expect(component.className).toBe("console-list-sub-item");
  });

  it("should render component with a custom component", () => {
    const { getByTestId } = makeSut({ ...defaultProps, LinkComponent: "button" });
    const component = getByTestId(testId);

    expect(component).toBeInstanceOf(HTMLButtonElement);
  });

  it("should render component with the correct title", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);
    const content = component.getElementsByClassName("console-list-sub-item__content");

    expect(content.length).toBeGreaterThan(0);
    expect(content[0]?.children.length).toBe(1);
    expect(content[0]?.children[0]).toBeInstanceOf(HTMLHeadingElement);
    expect(content[0]?.children[0]?.textContent).toBe(defaultProps.title);

    const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
    expect(icon).toHaveLength(0);
  });

  it("should render component with the active state", () => {
    const { getByTestId } = makeSut({ ...defaultProps, isActive: true });
    const component = getByTestId(testId);

    expect(component.className).toBe("console-list-sub-item console-list-sub-item--is-active");

    const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
    expect(icon).toHaveLength(0);
  });

  it("should render component with the unanswered state", () => {
    const { getByTestId } = makeSut({ ...defaultProps, showAnswer: true, isAnswered: false });
    const component = getByTestId(testId);
    expect(component.className).toBe("console-list-sub-item console-list-sub-item--is-unanswered");

    const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
    expect(icon).toHaveLength(1);
    expect(icon[0]?.getAttribute("data-name")).toBe(wrongIcon);
  });

  describe("when it's answered", () => {
    it("should render component with the answered state, whether the answer is correct or not", () => {
      const { getByTestId } = makeSut({ ...defaultProps, isAnswered: true });
      const component = getByTestId(testId);

      expect(component.className).toContain(
        "console-list-sub-item console-list-sub-item--is-answered"
      );

      const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
      expect(icon).toHaveLength(0);
    });

    it("should render component with the answered AND active state, whether the answer is correct or not", () => {
      const { getByTestId } = makeSut({ ...defaultProps, isActive: true, isAnswered: true });
      const component = getByTestId(testId);

      expect(component.className).toContain(
        "console-list-sub-item console-list-sub-item--is-answered-and-active"
      );

      const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
      expect(icon).toHaveLength(0);
    });

    describe("when the answer is WRONG", () => {
      it("should render component with the answered state", () => {
        const { getByTestId } = makeSut({ ...defaultProps, showAnswer: true, isAnswered: true });
        const component = getByTestId(testId);

        expect(component.className).toBe(
          "console-list-sub-item console-list-sub-item--is-answered console-list-sub-item--is-wrong"
        );

        const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
        expect(icon).toHaveLength(1);
        expect(icon[0]?.getAttribute("data-name")).toBe(wrongIcon);
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

        const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
        expect(icon).toHaveLength(1);
        expect(icon[0]?.getAttribute("data-name")).toBe(wrongIcon);
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

        const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
        expect(icon).toHaveLength(1);
        expect(icon[0]?.getAttribute("data-name")).toBe(correctIcon);
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

        const icon = component.getElementsByClassName("console-list-sub-item__answer-icon");
        expect(icon).toHaveLength(1);
        expect(icon[0]?.getAttribute("data-name")).toBe(correctIcon);
      });
    });
  });
});
