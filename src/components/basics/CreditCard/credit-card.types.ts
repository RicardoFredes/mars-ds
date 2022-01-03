export interface CreditCardProps extends React.HTMLProps<HTMLDivElement> {
  variant?: string;
  cardName: string;
  cardNumbers: string;
  iconName?: string;
}
