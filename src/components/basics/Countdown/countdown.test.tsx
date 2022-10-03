import type { CountdownProps } from "./countdown.types";

import { render } from "@testing-library/react";

import Countdown from "./countdown.component";
import { getDatesDiffInSeconds, secondsToPlaces } from "./countdown.helper";

const mockedCurrentDate = new Date("2022-10-01T07:15:00");
jest.useFakeTimers({ advanceTimers: true }).setSystemTime(mockedCurrentDate);

const defaultProps: CountdownProps = {
  endDate: "2022-10-03T07:00",
};

const makeSut = (props?: CountdownProps) => render(<Countdown {...props} />);

describe("<Countdown>", () => {
  it("should render countdown with 23:44:58", async () => {
    const { findByText } = makeSut(defaultProps);
    const daysPlace = await findByText("01", {}, { timeout: 1001 });
    const hoursPlace = await findByText("23", {}, { timeout: 1001 });
    const minutesPlace = await findByText("44", {}, { timeout: 1001 });
    const secondsPlace = await findByText("58", {}, { timeout: 1001 });
    expect(daysPlace.getAttribute("data-testid")).toBe("days-place");
    expect(hoursPlace.getAttribute("data-testid")).toBe("hours-place");
    expect(minutesPlace.getAttribute("data-testid")).toBe("minutes-place");
    expect(secondsPlace.getAttribute("data-testid")).toBe("seconds-place");
  });

  it("should render separators when showSeparator is true", async () => {
    const { container } = makeSut({ ...defaultProps, showSeparator: true });
    const els = container.querySelectorAll('[data-testid="separator"]');
    expect(els.length).toBe(3);
  });

  it("should not render separators when showSeparator is false", async () => {
    const { container } = makeSut({ ...defaultProps, showSeparator: false });
    const els = container.querySelectorAll('[data-testid="separator"]');
    expect(els.length).toBe(0);
  });

  it("should render days when showDays is true", async () => {
    const { container } = makeSut({ ...defaultProps, showDays: true });
    const els = container.querySelectorAll('[data-testid="days-place"]');
    expect(els.length).toBe(1);
  });

  it("should NOT render days when showDays is false", async () => {
    const { container } = makeSut({ ...defaultProps, showDays: false });
    const els = container.querySelectorAll('[data-testid="days-place"]');
    expect(els.length).toBe(0);
  });

  const startDate = "2022-10-01T07:00";
  describe("helper", () => {
    describe("getDatesDiffInSeconds", () => {
      it.each([
        {
          date: "2022-10-02T07:00",
          expected: 86400,
        },
        {
          date: "2022-10-01T07:15",
          expected: 900,
        },
      ])("should return expected value according to date", ({ date, expected }) => {
        const seconds = getDatesDiffInSeconds(new Date(startDate), new Date(date));
        expect(seconds).toBe(expected);
      });

      it("should console.error when startDate equal to or bigger than endDate", () => {
        jest.spyOn(console, "error");
        getDatesDiffInSeconds(new Date("2022-10-01T01:00:00"), new Date("2022-10-01T01:00:00"));
        expect(console.error).toHaveBeenCalledWith(
          "startDate cannot be equal to or bigger than endDate"
        );
      });
    });

    describe("secondsToPlaces", () => {
      it.each([
        {
          seconds: 86400,
          expected: { days: 1, hours: 0, minutes: 0, seconds: 0 },
        },
        {
          seconds: 900,
          expected: { days: 0, hours: 0, minutes: 15, seconds: 0 },
        },
      ])("should return an object corresponding with the seconds", ({ seconds, expected }) => {
        expect(secondsToPlaces(seconds)).toStrictEqual(expected);
      });
    });
  });
});
