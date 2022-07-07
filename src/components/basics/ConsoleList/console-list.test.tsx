import { render } from "@testing-library/react";

import ConsoleList from "@/components/basics/ConsoleList/console-list.component";
import type { ConsoleListProps } from "@/components/basics/ConsoleList/console-list.types";

const testId = "console-list";

const defaultProps: ConsoleListProps = {
  list: [
    {
      title: "Item 1",
      subtitle: "2 questões",
      iconName: "edit",
      list: [
        { title: "Item de console" },
        { title: "Item de console", isActive: true },
        { title: "Item de console", showAnswer: true },
        { title: "Item de console", showAnswer: true, isAnswered: true },
        { title: "Item de console", showAnswer: true, isAnswered: true, isCorrect: true },
      ],
    },
    {
      title: "Item 2",
      subtitle: "20min",
      iconName: "video",
    },
  ],
};

const makeSut = (props?: ConsoleListProps) => render(<ConsoleList {...props} />);

describe("<ConsoleList>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render component with the correct children", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);

    expect(component.children.length).toBe(defaultProps.list?.length);
    expect(component.children[0]).toHaveClass("console-list-group");

    expect(component.children.length).toBe(defaultProps.list?.length);
    expect(component.children[1]).toHaveClass("console-list-item");
  });
});
