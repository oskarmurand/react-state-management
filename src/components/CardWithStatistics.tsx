import * as React from "react";
import { Box } from "@twilio-paste/core";
import { Card } from "@twilio-paste/core/card";
import { RenderCounter } from "./RenderCounter";
import { Separator } from "@twilio-paste/core/separator";

interface CardWithStatisticsProps extends React.FunctionComponent {
  children: React.ReactNode;
}

// This component renders the children passed to it, and then renders the RenderCounter component.
// It allows us to observe the number of renders of the children.
const CardWithStatistics = ({ children }: { children: React.ReactNode }) => {

  return (
    <Card>
      {children}
      <Box paddingBottom="space60">
        <Separator orientation="horizontal" verticalSpacing={"space60"} />
        <RenderCounter />
      </Box>
    </Card>
  );
};

export default CardWithStatistics;
