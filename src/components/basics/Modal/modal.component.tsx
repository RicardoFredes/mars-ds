import type { ModalChildComponent, ModalChildProps, ModalOpenProps, ModalProps } from ".";

import classNames from "classnames";
import rcPortal from "rc-portal";
import { useState } from "react";

import Card, { CardElevations } from "@/components/basics/Card";
import ToggleButton from "@/components/basics/ToggleButton";

import { ModalSizes } from "./modal.types";

const Modal = ({ className, close, children, size = ModalSizes.Medium, ...props }: ModalProps) => {
  const [closing, setClosing] = useState(false);
  const cn = classNames(
    "modal",
    { "modal--is-closing": closing },
    className,
    `modal--size-${size}`
  );

  const handleClose = () => {
    setClosing(true);
    if (close) setTimeout(close, 300);
  };

  return (
    <div
      className={classNames("modal-overlay", { "modal-overlay--is-closing": closing })}
      onClick={handleClose}
    >
      <Card
        className={cn}
        onClick={(event) => event.stopPropagation()}
        elevation={CardElevations.XXHigh}
        {...props}
      >
        <ToggleButton iconName="close" onClick={handleClose} className="modal__close-icon" />
        <div className="modal__content">{children}</div>
      </Card>
    </div>
  );
};

export default Modal;

Modal.open = (ChildComponent: ModalChildComponent, modalProps: ModalOpenProps) => {
  const { closeDelay, duration, ...props } = modalProps;
  const Component = ({ close }: ModalChildProps) => (
    <Modal close={close} {...props}>
      <ChildComponent close={close} />
    </Modal>
  );
  return rcPortal(Component, { closeDelay, duration });
};
