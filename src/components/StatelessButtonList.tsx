import * as React from 'react';
import { Button } from '@twilio-paste/core/button';

// Example of a component whose state is managed by a parent component
// It has no local state of its own other than any state that is passed to it
// or any state imported from a context provider (not shown in this example, but React Router or Twilio Paste uses this pattern for example)
const StatelessButtonList = ({
    increment,
    decrement,
    reset,
  }: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  }) => {
    return (
      <>
        <li>
          <Button variant="secondary" onClick={increment}>increment</Button>
        </li>
        <li>
        <Button variant="secondary" onClick={decrement}>decrement</Button>
        </li>
        <li>
        <Button variant="secondary" onClick={reset}>reset</Button>
        </li>
      </>
    );
  };

export default StatelessButtonList;