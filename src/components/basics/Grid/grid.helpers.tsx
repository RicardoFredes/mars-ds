import type { GridProps } from "./grid.types";

import { makeArray } from "@/services";

import Card, { CardElevations } from "../Card";
import Grid from "./grid.component";

export const getGridStory = (props: GridProps) => {
  return (
    <Grid {...props}>
      {makeArray(12).map((_item, key) => {
        return (
          <Card key={key} elevation={CardElevations.Low}>
            Column {key + 1}
          </Card>
        );
      })}
    </Grid>
  );
};
