import React from "react";
import { Box, Callout, Card, Heading, Paragraph } from "@twilio-paste/core";
import { ContextAPIExampleProvider } from "../components/ContextApiExample/ContextProvider";
import OutsideOfContext from "../components/ContextApiExample/OutsideOfContext";
import WrapperComponent from "../components/ContextApiExample/WrapperComponent";
import ParentComponent from "../components/ContextApiExample/ParentComponent";
import ViewCountInContext from "../components/ContextApiExample/ViewCountInContext";

const Context = () => {
  return (
    <Card>
      <Heading as="h1" variant="heading10">
        Context API Example
      </Heading>
      <ContextAPIExampleProvider>
        <Box padding="space60">
          <Heading as="h2" variant="heading20">
            Context Provider
          </Heading>
          <Paragraph>
            This is an example of using the React Context API to manage state.
          </Paragraph>
          <Callout variant="neutral">
            <Paragraph>
              This example uses the React Context API to manage state. The state
              is managed in the <code>ContextProvider</code> component and
              passed down to the <code>ContextConsumer</code> component. The{" "}
              <code>ContextConsumer</code> component is used to access the state
              and update the state.
            </Paragraph>
          </Callout>
          <Card>
            <Heading as="h3" variant="heading30">
              Context Consumer
            </Heading>
            <Paragraph>
              This component consumes the state from the Context Provider.
            </Paragraph>
            <ParentComponent />
            <WrapperComponent ChildComponent={ViewCountInContext} />
          </Card>
        </Box>
      </ContextAPIExampleProvider>
      <Box padding="space60">
        <Heading as="h2" variant="heading20">
          Context stays within the provider
        </Heading>
        <OutsideOfContext />
      </Box>
    </Card>
  );
};

export default Context;
