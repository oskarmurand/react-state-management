import React from "react";
import { Card, Heading } from "@twilio-paste/core";

import Reducer from "../components/Reducer/Reducer";

const Context = () => {
  return (
    <Card>
      <Heading as="h1" variant="heading10">
        Reducer API Example
      </Heading>
        <Reducer />
    </Card>
  );
};

export default Context;