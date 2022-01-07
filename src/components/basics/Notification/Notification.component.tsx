import { NotificationProps } from "./Notification.types";
import classNames from "classnames";
import Card from "@/components/basics/Card";
import { CardElevations } from "@/components/basics/Card/card.types";
import Icon from "@/components/basics/Icon";
import Tokens from "@/tokens";
import { NotificationVariants } from ".";
import Subtitle, { SubtitleSizes } from "@/components/typographics/Subtitle";
import { useEffect, useState } from "react";
import rcPortal from "rc-portal";
import ToggleButton, { ToggleButtonVariants } from "../ToggleButton";

const icons: Record<
  typeof NotificationVariants[keyof typeof NotificationVariants],
  { name: string; color: string }
> = {
  warning: {
    name: "alert",
    color: Tokens.ColorWarning500,
  },
  success: {
    name: "checkmark-circle",
    color: Tokens.ColorSuccess500,
  },
  error: {
    name: "info",
    color: Tokens.ColorError500,
  },
  info: {
    name: "info",
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
  }, []);

  return (
    <Card className={cn} {...props} elevation={CardElevations.XXHigh}>
      {icon && (
        <Icon name={icon.name} style={{ color: icon.color }} className="notification__icon" />
      )}
      <Subtitle className="notification__content" size={SubtitleSizes.Small}>
        {content || children}
      </Subtitle>
      <ToggleButton
        iconName="close"
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

export default Notification;
