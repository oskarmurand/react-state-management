import React from "react";
import { Box } from "@twilio-paste/core/box";
import { Callout } from "@twilio-paste/core/callout";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Heading } from "@twilio-paste/core/heading";
import CardWithStatistics from "../CardWithStatistics";
import { Button, ListItem, UnorderedList } from "@twilio-paste/core";
import { store, RootState } from "./state/store";
import { actions } from "./state/reducer";
import { Provider } from "react-redux";
import StatelessButtonList from "../StatelessButtonList";
import StatelessValueItem from "../StatelessValueItem";
import { useDispatch, useSelector } from "react-redux";

const ValueWithState = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  return <StatelessValueItem value={value} />;
};

const ExampleWithProvider = () => {
  return (
    <Provider store={store}>
      <CardWithStatistics>
        <ReduxExample />
      </CardWithStatistics>
    </Provider>
  );
};

const ReduxExample = () => {
  const dispatch = useDispatch();

  return (
    <Box padding="space60">
      <Callout variant="neutral">
        <Paragraph>
          Redux provides an unidirectional data flow for managing state in your
          application. It leverages the context api and useReducer hook, but
          provides a more predictable way to manage state.
        </Paragraph>
      </Callout>
      <CardWithStatistics>
        <Heading as="h3" variant="heading30">
          Redux State
        </Heading>
        <Paragraph>
          Redux consists of the following components:
          <UnorderedList>
            <ListItem>
              Store: A single source of truth for your application state.
            </ListItem>
            <ListItem>
              Actions: Plain JavaScript objects that describe changes in the
              state.
            </ListItem>
            <ListItem>
              Reducers: Pure functions that take the current state and action
              and return a new state.
            </ListItem>
            <ListItem>
              Dispatch: A function that sends actions to the store.
            </ListItem>
            <ListItem>
              Middleware: Functions that extend Redux with custom functionality.
            </ListItem>
            <ListItem>
              Provider: A React component that provides the Redux store to your
              application.
            </ListItem>
          </UnorderedList>
        </Paragraph>
        <CardWithStatistics>
          <StatelessButtonList
            increment={() => dispatch(actions.addOne())}
            decrement={() => dispatch(actions.subtractOne())}
            reset={() => dispatch(actions.reset())}
          />
          <li>
            <CardWithStatistics>
              <Button
                variant="secondary"
                onClick={() => dispatch(actions.addNumber(5))}
              >
                Add 5
              </Button>
            </CardWithStatistics>
          </li>
          <CardWithStatistics>
            <ValueWithState />
          </CardWithStatistics>
        </CardWithStatistics>
      </CardWithStatistics>
    </Box>
  );
};

export default ExampleWithProvider;
