import { Variants } from "@/types";

const { Primary, Secondary } = Variants;

export const CreditCardVariants = { Primary, Secondary };

export interface CreditCardProps extends React.HTMLProps<HTMLDivElement> {
  variant?: typeof CreditCardVariants[keyof typeof CreditCardVariants];
  cardHolder?: string;
  cardNumber?: string;
  iconName?: string;
}
