import { render } from "@testing-library/react";
import Modal from ".";
import { ModalProps } from "./modal.types";

const makeSut = (props?: ModalProps) => render(<Modal {...props} />);

describe("<Modal>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
