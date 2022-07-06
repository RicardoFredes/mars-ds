import { render } from "@testing-library/react";

import ConsoleList from "@/components/basics/ConsoleList/console-list.component";
import type { ConsoleListProps } from "@/components/basics/ConsoleList/console-list.types";

const makeSut = (props?: ConsoleListProps) => render(<ConsoleList {...props} />);

describe("<ConsoleList>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
