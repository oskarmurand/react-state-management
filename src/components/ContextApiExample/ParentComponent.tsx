import WrapperComponent from "./WrapperComponent";
import ControllerComponent from "./ControllerComponent";


const ParentComponent = () => {
    return (
        <div>
            <h2>Parent Component</h2>
            <WrapperComponent ChildComponent={ControllerComponent}/>
        </div>
    );
}

export default ParentComponent;