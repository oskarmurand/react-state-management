import * as React from 'react';

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
          <button onClick={increment}>increment</button>
        </li>
        <li>
          <button onClick={decrement}>decrement</button>
        </li>
        <li>
          <button onClick={reset}>reset</button>
        </li>
      </>
    );
  };

export default StatelessButtonList;