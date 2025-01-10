import React, { useState } from 'react';


function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');


    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const calculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');

    };

    return (
        <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
            <h2>React Calculator</h2>
            <div style={{ marginBottom: "10px", fontSize: "24px" }}>
                <div>Input: {input}</div>
                <div>Result: {result}</div>
            </div>
            <div>
                {["1", "2", "3", "+"].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
                <br />
                {["4", "5", "6", "-"].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
                <br />
                {["7", "8", "9", "*"].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
                <br />
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={clearInput}>C</button>
                <button onClick={() => handleClick("/")}>/</button>
                <br />
                <button onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default Calculator;

