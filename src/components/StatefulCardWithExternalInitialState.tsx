import * as React from "react";

// This is a simple example of a component that uses local state
// The state is managed using the useState hook
// This component has an external initial state
const StatefulCardWithExternalInitialState = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(value);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(value);

  return (
    <ul>
      <li>
        <button onClick={increment}>increment</button>
      </li>
      <li>
        <button onClick={decrement}>decrement</button>
      </li>
      <li>
        <button onClick={reset}>reset</button>
      </li>
      <li>
        <span>value: {count}</span>
      </li>
    </ul>
  );
};

export default StatefulCardWithExternalInitialState;