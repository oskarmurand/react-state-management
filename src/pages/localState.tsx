import * as React from "react";
import StatefulCard from "../components/StatefulCard";
import StatefulCardWithExternalInitialState from "../components/StatefulCardWithExternalInitialState";
import ParentWithState from "../components/ParentWithState";
import HookStateExample from "../components/HookStateExample";

const UseStateListRender = () => (
  <>
    <h3>Stateful Card</h3>
    <StatefulCard />
    <h3>Stateful Card With External Initial State</h3>
    <StatefulCardWithExternalInitialState value={5} />
    <h3>Parent With State</h3>
    <ParentWithState />
    <h3>Hook State Example</h3>
    <HookStateExample />
  </>
);

const LocalStatePage = () => {
  const [showList, setShowList] = React.useState(false);
  const toggleList = () => setShowList(!showList);
  return (
    <>
      <h1>Local State Management Demo</h1>
      <button onClick={toggleList}>Toggle Demo List</button>
      {/* Notice that when you toggle the list, the state is lost
            this is because the local state is not persisted
            it is only available to the component and its children
            when the component is unmounted, the state is lost
      . */}
      {showList && <UseStateListRender />}
    </>
  );
};

export default LocalStatePage;
