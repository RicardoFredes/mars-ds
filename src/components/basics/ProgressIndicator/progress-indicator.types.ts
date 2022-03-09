import type { HTMLProps } from "react";

export interface ProgressIndicatorProps extends HTMLProps<HTMLDivElement> {
  fetching?: boolean;
  fetched?: boolean;
}
