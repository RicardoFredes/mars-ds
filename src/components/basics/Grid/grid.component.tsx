import type { Column, ColumnsProps, GridProps } from "./grid.types";

import classNames from "classnames";

const Grid = ({
  className,
  children,
  columns,
  style,
  gap,
  as = "div",
  growing = true,
  ...props
}: GridProps) => {
  const cn = classNames(className, "grid", { "grid--growing": growing });
  const computedStyle = {
    "--gap": typeof gap === "number" ? `${gap}px` : gap,
    ...getCssColumnsVars(columns),
    ...style,
  };

  const Component = as || "div";
  return (
    <Component className={cn} data-testid="grid" style={computedStyle} {...props}>
      {children}
    </Component>
  );
};

const getCssColumnsVars = (columns?: ColumnsProps) => {
  if (typeof columns !== "object" || Array.isArray(columns)) {
    return createVarResponse(getCssColumns(columns));
  }
  const xs = getCssColumns(columns.xs);
  const sm = getCssColumns(columns.sm, xs);
  const md = getCssColumns(columns.md, sm || xs);
  const lg = getCssColumns(columns.lg, md || sm || xs);
  return createVarResponse(xs, sm, md, lg);
};

const createVarResponse = (xs?: Column, sm?: Column, md?: Column, lg?: Column) => {
  const defaultValue = getCssColumns(xs || sm || md || lg);
  return {
    "--columns-xs": defaultValue,
    "--columns-sm": getCssColumns(sm, defaultValue),
    "--columns-md": getCssColumns(md, defaultValue),
    "--columns-lg": getCssColumns(lg, defaultValue),
  };
};

const getCssColumns = (columns?: ColumnsProps, defaultValue?: string): string => {
  const computedDefaultValue = defaultValue || "1fr";
  if (!columns) return computedDefaultValue;
  if (typeof columns === "string") return columns;
  if (typeof columns === "number") return `repeat(${columns}, 1fr)`;
  if (!Array.isArray(columns)) return computedDefaultValue;
  return columns.map((column) => (typeof column === "number" ? `${column}fr` : column)).join(" ");
};

export default Grid;
