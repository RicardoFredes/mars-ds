import type { CalendarProps } from "./calendar.types";

import classNames from "classnames";

import Caption from "@/components/typographies/Caption";
import Text from "@/components/typographies/Text";

import Grid from "../Grid";
import Link from "../Link";

const week = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

const Calendar = ({
  className,
  next,
  previous,
  title,
  subtitle,
  weekList = week,
  list = [],
  ...props
}: CalendarProps) => {
  const cn = classNames("calendar", className);
  const cnHeader = classNames("calendar__header");
  const cnWeek = classNames("calendar__week");
  const cnDays = classNames("calendar__days");

  return (
    <div className={cn} {...props}>
      {title && (
        <div className={cnHeader}>
          <Link
            className={classNames({
              "calendar__header--is-disabled-previous": previous?.disabled,
            })}
            iconName="chevron-left"
            variant="secondary"
            href={previous?.href}
            onClick={previous?.onClick}
            disabled={previous?.disabled}
          />
          <Text html={title} className="mr-1x" />
          <Link
            className={classNames({
              "calendar__header--is-disabled-next": next?.disabled,
            })}
            iconName="chevron-right"
            variant="secondary"
            href={next?.href}
            onClick={next?.onClick}
            disabled={next?.disabled}
          />
        </div>
      )}
      <Caption html={subtitle} />
      {weekList && (
        <Grid className={cnWeek} columns={7} gap="10">
          {weekList.map((week, key) => {
            return <Caption key={key} html={week} />;
          })}
        </Grid>
      )}
      {list && (
        <Grid columns={7} gap="10">
          {list.map(({ number, colors, active = false, disabled = false, href, onClick }, key) => {
            const cnDay = classNames("calendar__day", {
              "calendar__day--is-active": active,
              "calendar__day--is-disabled": disabled,
            });
            return (
              <div className={cnDays} key={key}>
                <Caption>
                  <Link href={href} onClick={onClick} className={cnDay}>
                    {number}
                  </Link>
                </Caption>
                <div className="calendar__days--subjects">
                  {colors?.map((item, key) => {
                    return (
                      <div
                        className="calendar__days--subject"
                        key={key}
                        style={{
                          backgroundColor: `${item}`,
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Calendar;
