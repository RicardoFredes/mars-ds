import type { CalendarProps } from "./calendar.types";

import { render } from "@testing-library/react";

import Calendar from "./calendar.component";

const mock = {
  next: {
    href: "/week/2",
    disabled: false,
  },
  previous: {
    disabled: true,
  },
  title: "Semana 01",
  subtitle: "22 a 28 de Janeiro",
  weekList: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  list: [
    {
      number: "22",
      colors: ["white", "red", "green"],
    },
    {
      number: "23",
      colors: ["purple", "red", "green"],
    },
    {
      number: "24",
      colors: ["red", "green"],
    },
    {
      number: "25",
      active: true,
      colors: ["red", "green"],
    },
    {
      number: "26",
      disabled: true,
    },
    {
      number: "27",
      disabled: true,
    },
    {
      number: "28",
      disabled: true,
    },
  ],
};

const makeSut = (props: CalendarProps) => render(<Calendar {...props} />);

describe("<Calendar>", () => {
  it("should render component", () => {
    const wrapper = makeSut(mock);
    expect(wrapper).toBeTruthy();
  });
});
