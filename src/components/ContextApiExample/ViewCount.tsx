import * as React from "react";
import { DetailText, Heading } from "@twilio-paste/core";
import { Card } from "@twilio-paste/core/card";
import {
  DescriptionList,
  DescriptionListSet,
  DescriptionListTerm,
  DescriptionListDetails,
} from "@twilio-paste/core/description-list";


const ViewCount = ({ count }: { count: number }) => (
  <Card paddingBottom={"space0"}>
    <Heading as="h4" variant="heading40">
      View Count
    </Heading>
    <DetailText>This compoent renders the state passed from parent.</DetailText>
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Count</DescriptionListTerm>
        <DescriptionListDetails>{count}</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  </Card>
);

export default ViewCount;
