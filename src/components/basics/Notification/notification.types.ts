import type { ReactNode } from "react";

import type { CardProps } from "@/components/basics/Card/card.types";

export interface NotificationProps extends Omit<CardProps, "variant" | "content"> {
  variant?: typeof NotificationVariants[keyof typeof NotificationVariants];
  close?: () => boolean;
  durationInMs?: number;
  content?: string | ReactNode;
}

export const NotificationVariants = {
  Info: "info",
  Success: "success",
  Warning: "warning",
  Error: "error",
  Default: "default",
};
