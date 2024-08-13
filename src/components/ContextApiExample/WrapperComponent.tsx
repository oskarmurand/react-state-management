import * as React from "react";
import { Card } from "@twilio-paste/core/card";
import { Heading } from "@twilio-paste/core/heading";
import { Paragraph } from "@twilio-paste/core";

const WrapperComponent = ({
  ChildComponent,
}: {
  ChildComponent: React.FunctionComponent;
}) => (
  <Card>
    <Heading as="h3" variant="heading30">
      Wrapper Component
    </Heading>
    <Paragraph>
      This is an interminiary wrapper component that does not hold state or pass
      it.
    </Paragraph>
    <ChildComponent />
  </Card>
);

export default WrapperComponent;
