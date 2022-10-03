import type {
  CountdownPlaceProps,
  CountdownProps,
  CountdownSeparatorProps,
} from "./countdown.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Tokens from "@/tokens";

import {
  getCountdownTexts,
  getDatesDiffInSeconds,
  getTomorrowDateAsString,
  secondsToPlaces,
} from "./countdown.helper";
import { CountdownSizes } from "./countdown.types";
const Countdown = ({
  endDate = getTomorrowDateAsString(),
  className,
  size = CountdownSizes.Medium,
  color = Tokens.ColorTextPrimary,
  background = "transparent",
  showSeparator = true,
  showDays = true,
  ...props
}: CountdownProps) => {
  const cn = classNames("countdown", `countdown--size-${size}`, className);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [texts, setTexts] = useState({ days: "", hours: "", minutes: "", seconds: "" });
  const endDateAsDate = new Date(endDate + ":00");

  useEffect(() => {
    let isActive = true;
    setTimeout(() => {
      if (isActive) {
        const currDate = new Date();
        if (endDateAsDate.valueOf() > currDate.valueOf()) {
          const diffInSeconds = getDatesDiffInSeconds(new Date(), endDateAsDate);
          const diffObj = secondsToPlaces(diffInSeconds);
          setCountdown(diffObj);
          setTexts(getCountdownTexts(diffObj));
        }
      }
    }, 1000);
    return () => {
      isActive = false;
    };
  }, [countdown]);

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div className={cn} {...props} data-testid="countdown">
      {showDays && (
        <>
          <Place
            measure={texts.days}
            value={String(days).padStart(2, "0")}
            style={{ backgroundColor: background, color }}
            dataTestid="days-place"
          />
          <Separator
            enable={showSeparator}
            color={background !== "transparent" ? background : color}
          />
        </>
      )}
      <Place
        measure={texts.hours}
        value={String(hours).padStart(2, "0")}
        style={{ backgroundColor: background, color }}
        dataTestid="hours-place"
      />
      <Separator enable={showSeparator} color={background !== "transparent" ? background : color} />
      <Place
        measure={texts.minutes}
        value={String(minutes).padStart(2, "0")}
        style={{ backgroundColor: background, color }}
        dataTestid="minutes-place"
      />
      <Separator enable={showSeparator} color={background !== "transparent" ? background : color} />
      <Place
        measure={texts.seconds}
        value={String(seconds).padStart(2, "0")}
        style={{ backgroundColor: background, color }}
        dataTestid="seconds-place"
      />
    </div>
  );
};

const Place = ({ measure, value, dataTestid, ...props }: CountdownPlaceProps) => {
  return (
    <div className="countdown__place" {...props}>
      <span className="countdown__place__value" data-testid={dataTestid}>
        {value}
      </span>
      <span className="countdown__place__measure">{measure}</span>
    </div>
  );
};

const Separator = ({ enable, color }: CountdownSeparatorProps) => {
  const cn = classNames("countdown__separator", { "countdown__separator--disabled": !enable });
  return (
    <div className={cn}>
      {enable && (
        <span
          data-testid="separator"
          className="countdown__separator__inner countdown__place__value"
          style={{ color }}
        >
          :
        </span>
      )}
    </div>
  );
};

export default Countdown;
