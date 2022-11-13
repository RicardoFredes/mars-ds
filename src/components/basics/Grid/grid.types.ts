import type { ComponentItem } from "@/types";

type Column = string | number | Array<string | number> | undefined;

interface Columns {
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
}

type ColumnsProps = Columns | Column;

interface GridProps extends Omit<ComponentItem, "as"> {
  columns?: ColumnsProps;
  gap?: number | string;
  as?: string | React.ElementType;
  growing?: boolean;
  reversedLastElement?: "xs" | "sm";
}

export type { GridProps, ColumnsProps, Column };
