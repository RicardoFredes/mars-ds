import type { GuestButtonsProps } from "./guest-buttons.types";

import { render } from "@testing-library/react";

import GuestButtons from "./guest-buttons.component";

const makeSut = (props?: GuestButtonsProps) => render(<GuestButtons {...props} />);

describe("<GuestButtons>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
