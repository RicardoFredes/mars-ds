import type { ReactNode } from "react";
import type { NotificationProps } from "./notification.types";

import classNames from "classnames";
import rcPortal from "rc-portal";
import { useEffect, useState } from "react";

import Card, { CardElevations } from "@/components/basics/Card";
import Icon from "@/components/basics/Icon";
import ToggleButton, { ToggleButtonVariants } from "@/components/basics/ToggleButton";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import { ICONS } from "@/configs/icons.config";
import Tokens from "@/tokens";

import { NotificationVariants } from "./notification.types";

const icons: Record<
  typeof NotificationVariants[keyof typeof NotificationVariants],
  { name: string; color: string }
> = {
  warning: {
    name: ICONS.NOTIFICATIONS.WARNING,
    color: Tokens.ColorWarning500,
  },
  success: {
    name: ICONS.NOTIFICATIONS.SUCCESS,
    color: Tokens.ColorSuccess500,
  },
  error: {
    name: ICONS.NOTIFICATIONS.ERROR,
    color: Tokens.ColorError500,
  },
  info: {
    name: ICONS.NOTIFICATIONS.INFO,
    color: Tokens.ColorInfo500,
  },
};

const Notification = ({
  className,
  content,
  children,
  variant = NotificationVariants.Default,
  durationInMs = 5000,
  close,
  ...props
}: NotificationProps) => {
  const [closing, setClosing] = useState(false);
  const cn = classNames("notification", { "notification-is--closing": closing }, className);

  const icon = icons[variant];

  const handleClose = () => {
    setClosing(true);
    if (close) setTimeout(close, 300);
  };

  useEffect(() => {
    if (durationInMs > 0) {
      setTimeout(handleClose, durationInMs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={cn} {...props} elevation={CardElevations.XXHigh}>
      {icon && (
        <Icon name={icon.name} style={{ color: icon.color }} className="notification__icon" />
      )}
      <Heading className="notification__content" size={HeadingSizes.Small}>
        {content || children}
      </Heading>
      <ToggleButton
        iconName={ICONS.ACTIONS.CLOSE}
        className="notification__close-button"
        onClick={handleClose}
        variant={ToggleButtonVariants.Text}
      />
    </Card>
  );
};

let notificationParent: HTMLElement;
const PARENT_NAME = "notification-list";

const initializeNotification = () => {
  notificationParent = document.createElement("div");
  notificationParent.classList.add(PARENT_NAME);
  notificationParent.id = PARENT_NAME;
  document.body.append(notificationParent);
};

Notification.open = (props: NotificationProps) => {
  if (!notificationParent) initializeNotification();
  return rcPortal(Notification, props, notificationParent);
};

Notification.success = (children: ReactNode | string) =>
  Notification.open({ children, variant: NotificationVariants.Success });

Notification.error = (children: ReactNode | string) =>
  Notification.open({ children, variant: NotificationVariants.Error });

Notification.warning = (children: ReactNode | string) =>
  Notification.open({ children, variant: NotificationVariants.Warning });

Notification.info = (children: ReactNode | string) =>
  Notification.open({ children, variant: NotificationVariants.Info });

export default Notification;
