import * as React from 'react';

const ContextAPIExampleContext = React.createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
    });

const ContextAPIExampleProvider = ({ children }: { children: React.ReactNode }) => {
    // this component hold state and passes it to children for rendering
    const [count, setCount] = React.useState(0);

    // it can also hold the stateful logic
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <ContextAPIExampleContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </ContextAPIExampleContext.Provider>
    );
}

export { ContextAPIExampleContext, ContextAPIExampleProvider };