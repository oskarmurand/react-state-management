import * as React from 'react';

// Example of a component whose state is managed by a parent component
// It has no local state of its own other than any state that is passed to it
// or any state imported from a context provider (not shown in this example, but React Router or Twilio Paste uses this pattern for example)
const StatelessValueItem = ({ value }: { value: number }) => {
    return (
      <li>
        <span>value: {value}</span>
      </li>
    );
  };

export default StatelessValueItem;