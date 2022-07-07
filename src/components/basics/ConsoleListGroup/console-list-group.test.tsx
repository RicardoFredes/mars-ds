import type { ConsoleListGroupProps } from "./console-list-group.types";

import { render } from "@testing-library/react";

import ConsoleListGroup from "./console-list-group.component";

const testId = "console-list-group";

const defaultProps: ConsoleListGroupProps = {
  title: "Exercícios de compreensão sobre soma",
  subtitle: "9 exercícios",
  LinkComponent: "a",
  iconName: "edit",
  list: [
    { title: "Exercício 1" },
    { title: "Exercício 2", isActive: true },
    { title: "Exercício 3", showAnswer: true, isAnswered: false },
    { title: "Exercício 4", isAnswered: true },
    { title: "Exercício 5", isActive: true, isAnswered: true },
    { title: "Exercício 6", showAnswer: true, isAnswered: true },
    { title: "Exercício 7", isActive: true, showAnswer: true, isAnswered: true },
    { title: "Exercício 8", showAnswer: true, isAnswered: true, isCorrect: true },
    { title: "Exercício 9", isActive: true, showAnswer: true, isAnswered: true, isCorrect: true },
  ],
};

const makeSut = (props?: ConsoleListGroupProps) =>
  render(<ConsoleListGroup {...defaultProps} {...props} />);

describe("<ConsoleListGroup>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render the correct children", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);
    const body = component.getElementsByClassName("console-list-group__body");

    expect(body.length).toBeGreaterThan(0);
    expect(body[0]?.children.length).toBe(defaultProps.list.length);
    expect(body[0]?.children[0]?.className).toContain("console-list-sub-item");
    expect(body[0]?.children[0]?.textContent).toBe("Exercício 1");
  });
});
