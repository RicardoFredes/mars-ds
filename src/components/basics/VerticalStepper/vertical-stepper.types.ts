import type { HTMLProps, ReactNode } from "react";

import type { LinkProps } from "@/components/basics/Link";

interface VerticalStepperItemProps extends HTMLProps<HTMLLIElement> {
  title: string;
  link: LinkProps;
  subtitle?: string;
  children?: ReactNode;
  icon?: string;
  iconColor?: string;
  circleColor?: string;
}

interface VerticalStepperProps extends Omit<HTMLProps<HTMLOListElement>, "type"> {
  items: VerticalStepperItemProps[];
}

export type { VerticalStepperProps, VerticalStepperItemProps };
