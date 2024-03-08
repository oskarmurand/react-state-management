import * as React from "react";
import StatelessButtonList from "../StatelessButtonList";
import StatelessValueItem from "../StatelessValueItem";

const useCounter = (initial = 0) => {
  const [count, setCount] = React.useState(initial);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
};

// this is an example to demonstrate how to abstract the stateful logic into a custom hook
const HookStateExample = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <ul>
      <StatelessButtonList
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <StatelessValueItem value={count} />
      {/* // or you can use the custom hook directly
            notice, that every instance of useCounter will have its own state
            this means, that importing the useCounter hook in multiple components will not share state
            this is a good way to encapsulate stateful logic and reuse it across components
            this is also a common misconception about hooks, that they are shared across components
        */}
      <StatelessValueItem value={useCounter(0).count} />
    </ul>
  );
};

export default HookStateExample;
