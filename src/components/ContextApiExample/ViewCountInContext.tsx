import * as React from 'react';
import { ContextAPIExampleContext } from './ContextProvider';
import ViewCount from './ViewCount';

// This component fetches the context and renders the <ViewCount> component with the count value
const ViewCountInContext = () => {
    const { count } = React.useContext(ContextAPIExampleContext);
    return <ViewCount count={count} />;
    }

    export default ViewCountInContext;