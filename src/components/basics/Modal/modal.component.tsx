import type { ModalChildComponent, ModalChildProps, ModalOpenProps, ModalProps } from ".";

import classNames from "classnames";
import rcPortal from "rc-portal";
import { useEffect, useRef, useState } from "react";

import Card, { CardElevations } from "@/components/basics/Card";
import ToggleButton from "@/components/basics/ToggleButton";
import { hideIntercom } from "@/services/intercom";

import { ModalSizes } from "./modal.types";

const Modal = ({
  className,
  close,
  onClose,
  children,
  size = ModalSizes.Medium,
  closable = true,
  ...props
}: ModalProps) => {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  const cn = classNames(
    "modal",
    { "modal--is-closing": closing },
    className,
    `modal--size-${size}`
  );

  const handleClose = () => {
    if (!closable) return;
    setClosing(true);
    hideIntercom(false);
    document.removeEventListener("keydown", handleKeyDown);
    setTimeout(() => {
      close?.();
      onClose?.();
      setOpen(false);
    }, 300);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") handleClose();
  };

  useEffect(() => {
    hideIntercom(true);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (modalRef.current) modalRef?.current?.focus();
  }, [modalRef]);

  return (
    <>
      {open && (
        <div
          tabIndex={0}
          ref={modalRef}
          className={classNames("modal-overlay", { "modal-overlay--is-closing": closing })}
          onClick={handleClose}
        >
          <Card
            className={cn}
            onClick={(event) => event.stopPropagation()}
            elevation={CardElevations.XXHigh}
            {...props}
          >
            {closable && (
              <ToggleButton iconName="close" onClick={handleClose} className="modal__close-icon" />
            )}
            <div className="modal__content">{children}</div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;

Modal.open = (ChildComponent: ModalChildComponent, modalProps: ModalOpenProps) => {
  const { closeDelay, duration, childComponentProps, ...props } = modalProps;
  const Component = ({ close }: ModalChildProps) => (
    <Modal close={close} {...props}>
      <ChildComponent {...childComponentProps} close={close} />
    </Modal>
  );
  return rcPortal(Component, { closeDelay, duration });
};
