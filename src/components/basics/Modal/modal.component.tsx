import { useState } from "react";
import classNames from "classnames";
import rcPortal from "rc-portal";

import { ModalProps, ModalSizes } from ".";

import Card, { CardElevations } from "@/components/basics/Card";
import ToggleButton from "@/components/basics/ToggleButton";

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

Modal.open = (ChildComponent: any, childComponentProps: any = {}) => {
  const Component = ({ close }: any) => (
    <Modal close={close} size={childComponentProps.size}>
      <ChildComponent close={close} {...childComponentProps} />
    </Modal>
  );
  return rcPortal(Component, childComponentProps);
};
