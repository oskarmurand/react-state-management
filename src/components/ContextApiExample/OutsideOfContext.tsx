import * as React from "react";
import { Card } from "@twilio-paste/core/card";
import { Callout, Heading, Paragraph } from "@twilio-paste/core";
import { Stack } from "@twilio-paste/core/stack";
import ControllerComponent from "./ControllerComponent";
import ViewCountInContext from "./ViewCountInContext";

const OutsideOfContext = () => {
  return (
    <Card>
      <Heading as="h4" variant="heading40">
        Outside of Context
      </Heading>
      <Paragraph>
        This is an example of rendering state based on the context API, outside of the context provider.
      </Paragraph>
      <Stack orientation="vertical" spacing="space40">
        <ControllerComponent />
        <Callout variant="neutral">
            Notice that the state is not updated and re-renders are not triggered.
            </Callout>
        <ViewCountInContext />
      </Stack>
    </Card>
  );
};

export default OutsideOfContext;
