import * as React from 'react';
import StatelessButtonList from './StatelessButtonList';
import StatelessValueItem from './StatelessValueItem';

// This is a parent component that renders two children
// one child updates the  state, while the other child renders the state
// the state is managed by the parent component
// this allows to pass state to children without using a context provider
// or a state management library like Redux
// this is a simple example of lifting state up
const ParentWithState = () => {
    // this component hold state and passes it to children for rendering
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
      <div>
        <ul>
          <StatelessButtonList
            // notice, here we do not need to pass count
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
          <StatelessValueItem value={count} />
        </ul>
      </div>
    );
  };

export default ParentWithState;