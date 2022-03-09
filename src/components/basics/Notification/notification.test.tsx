import type { NotificationProps } from "./notification.types";

import { render } from "@testing-library/react";

import Notification, { NotificationVariants } from ".";

const makeSut = (props?: NotificationProps) =>
  render(<Notification variant={NotificationVariants.Default} {...props} />);

describe("<Notification>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
