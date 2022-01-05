import { render } from "@testing-library/react";
import Notification, { NotificationVariants } from ".";
import { NotificationProps } from "./Notification.types";

const makeSut = (props?: NotificationProps) =>
  render(<Notification variant={NotificationVariants.Default} {...props} />);

describe("<Notification>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
