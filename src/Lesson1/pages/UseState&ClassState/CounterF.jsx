import React, {useState} from 'react';

const CounterF = () => {

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count -1)
    };

    return (
        <div>
            <h2>UseState - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterF;