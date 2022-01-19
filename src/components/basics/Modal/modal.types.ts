import { CardProps } from "@/components/basics/Card/card.types";
import { Sizes } from "@/types";

export type Close = () => boolean;

const { Large, Medium, Small } = Sizes;
export const ModalSizes = { Large, Medium, Small };

export interface ModalProps extends Omit<CardProps, "size"> {
  close?: Close;
  size?: typeof ModalSizes[keyof typeof ModalSizes];
}

export interface ModalChildProps {
  close?: Close;
}

export interface ModalOpenProps {
  size?: typeof ModalSizes[keyof typeof ModalSizes];
  closeDelay?: number;
  duration?: number;
}
