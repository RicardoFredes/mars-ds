import type { CardProps } from "@/components/basics/Card/card.types";
import { Sizes } from "@/types";

export type Close = () => boolean;

const { Large, Medium, Small } = Sizes;
export const ModalSizes = { Large, Medium, Small };

export interface ModalProps extends Omit<CardProps, "size"> {
  close: Close;
  onClose: VoidFunction;
  size?: typeof ModalSizes[keyof typeof ModalSizes];
}

export type ModalChildComponent = (props: ModalChildProps) => JSX.Element;

export interface ModalChildProps {
  close: Close;
  onClose: VoidFunction;
  [props: string]: any;
}

export interface ModalOpenProps extends Omit<ModalProps, "close"> {
  closeDelay?: number;
  duration?: number;
  childComponentProps?: any;
}
