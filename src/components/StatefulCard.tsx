import * as React from "react";

// This is a simple example of a component that uses local state
// The state is managed using the useState hook
const StatefulCard = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

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

export default StatefulCard;