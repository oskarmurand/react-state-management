import * as React from "react";
import {
  Box,
  Callout,
  DescriptionList,
  DescriptionListDetails,
  DescriptionListSet,
  DescriptionListTerm,
  Heading,
  Paragraph,
  Stack,
} from "@twilio-paste/core";
import CardWithStatistics from "../CardWithStatistics";
import { Button, ButtonGroup } from "@twilio-paste/core";

const actions = {
  increment: { type: "increment" },
  decrement: { type: "decrement" },
  reset: { type: "reset" },
};

type ActionType = (typeof actions)[keyof typeof actions];
type StateType = {
  count: number;
  countUpdates: number;
  countTotalSum: number;
  incrementCount: number;
  decrementCount: number;
  resetCount: number;
};
type ReducerType = (state: StateType, action: ActionType) => StateType;

const initialState: StateType = {
  count: 0,
  countUpdates: 0,
  countTotalSum: 0,
  incrementCount: 0,
  decrementCount: 0,
  resetCount: 0,
};

const counterReducer: ReducerType = (state, action) => {
  switch (action.type) {
    case actions.increment.type:
      return {
        ...state,
        count: state.count + 1,
        countUpdates: state.countUpdates + 1,
        countTotalSum: state.countTotalSum + state.count + 1,
        incrementCount: state.incrementCount + 1,
      };
    case actions.decrement.type:
      return {
        ...state,
        count: state.count - 1,
        countUpdates: state.countUpdates + 1,
        countTotalSum: state.countTotalSum + state.count - 1,
        decrementCount: state.decrementCount + 1,
      };
    case actions.reset.type:
      return {
        ...state,
        count: 0,
        countUpdates: state.countUpdates + 1,
        resetCount: state.resetCount + 1,
      };
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);
  const {
    count,
    countUpdates,
    countTotalSum,
    incrementCount,
    decrementCount,
    resetCount,
  } = state;

  return (
    <CardWithStatistics>
      <Heading as="h4" variant="heading40">
        Controller Component
      </Heading>
      <Paragraph>
        This is an example of a component that is using the context API. It does
        not hold state, but it can access and update the state.
      </Paragraph>
      <Stack orientation="vertical" spacing="space40">
        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => dispatch(actions.increment)}
          >
            increment
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(actions.decrement)}
          >
            decrement
          </Button>
          <Button variant="secondary" onClick={() => dispatch(actions.reset)}>
            reset
          </Button>
        </ButtonGroup>
        <DescriptionList>
          <DescriptionListSet>
            <DescriptionListTerm>Count</DescriptionListTerm>
            <DescriptionListDetails>{count}</DescriptionListDetails>
          </DescriptionListSet>

          <DescriptionListSet>
            <DescriptionListTerm>Count Updates</DescriptionListTerm>
            <DescriptionListDetails>{countUpdates}</DescriptionListDetails>
          </DescriptionListSet>

          <DescriptionListSet>
            <DescriptionListTerm>Count Total Sum</DescriptionListTerm>
            <DescriptionListDetails>{countTotalSum}</DescriptionListDetails>
          </DescriptionListSet>

          <DescriptionListSet>
            <DescriptionListTerm>Increment Count</DescriptionListTerm>
            <DescriptionListDetails>{incrementCount}</DescriptionListDetails>
          </DescriptionListSet>

          <DescriptionListSet>
            <DescriptionListTerm>Decrement Count</DescriptionListTerm>
            <DescriptionListDetails>{decrementCount}</DescriptionListDetails>
          </DescriptionListSet>

          <DescriptionListSet>
            <DescriptionListTerm>Reset Count</DescriptionListTerm>
            <DescriptionListDetails>{resetCount}</DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </Stack>
    </CardWithStatistics>
  );
};

const Reducer = () => {
  return (
    <Box padding="space60">
      <Callout variant="neutral">
        <Paragraph>
          React provides a built-in hook called <code>useReducer</code> to
          manage state. It is an alternative to <code>useState</code> and is
          used to manage more complex state logic in a component. It is similar
          to the <code>useState</code> hook, but it uses a reducer function to
          update the state. This allows you to manage state in a more
          predictable way, and it is useful for managing state that has multiple
          sub-values or when the next state depends on the previous one.
        </Paragraph>
      </Callout>

      <CardWithStatistics>
        <Heading as="h3" variant="heading30">
          useReducer
        </Heading>
        <Paragraph>
          This component uses the <code>useReducer</code> hook to manage state.
        </Paragraph>
        <ReducerComponent />
      </CardWithStatistics>
    </Box>
  );
};

export default Reducer;
