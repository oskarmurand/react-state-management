import React from "react";
import { Card, Heading } from "@twilio-paste/core";
import ReduxExample from "../components/ReduxExample";

const ReduxPage = () => {
  return (
    <Card>
      <Heading as="h1" variant="heading10">
        Redux API Example
      </Heading>
      <ReduxExample />
    </Card>

  );
};

export default ReduxPage;