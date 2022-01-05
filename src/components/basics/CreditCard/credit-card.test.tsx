import { render } from "@testing-library/react";
import CreditCard from ".";
import { CreditCardProps } from "./credit-card.types";

const makeSut = (props?: CreditCardProps) =>
  render(<CreditCard cardHolder="Marllon Pereira" cardNumber="1234 3214 2134 4321" {...props} />);

describe("<CreditCard>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
