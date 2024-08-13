import * as React from "react";
import { Card } from "@twilio-paste/core/card";
import { Button, ButtonGroup, Heading, Paragraph } from "@twilio-paste/core";
import { ContextAPIExampleContext } from "./ContextProvider";

const ControllerComponent = () => {
  const { increment, decrement, reset } = React.useContext(
    ContextAPIExampleContext
  );

  return (
    <Card>
      <Heading as="h4" variant="heading40">
        Controller Component
      </Heading>
      <Paragraph>
        This is an example of a component that is using the context API. It does not hold state, but it can access and update the state.
      </Paragraph>
      <ButtonGroup>
        <Button variant="secondary" onClick={increment}>
          increment
        </Button>
        <Button variant="secondary" onClick={decrement}>
          decrement
        </Button>
        <Button variant="secondary" onClick={reset}>
          reset
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ControllerComponent;
