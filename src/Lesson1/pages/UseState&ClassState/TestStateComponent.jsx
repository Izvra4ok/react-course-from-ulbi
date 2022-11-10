import React from 'react';
import CounterClassC from "./CounterClassC";
import CounterF from "./CounterF";
import TestValueComponent from "./Value";

const TestStateComponent = () => {
    return (
        <div>
            <h2 style={{textAlign:"center"}}>useState and State Class Component</h2>
            <CounterClassC/>
            <CounterF/>
            <TestValueComponent/>
        </div>
    );
};

export default TestStateComponent;