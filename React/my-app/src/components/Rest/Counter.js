import React, { useState } from 'react';

export default function Counter() {
    const operators = ['+', '-', '*'];
    const [info, setInfo] = useState({
        count: 0,
        show: true,
        operator: operators[0],
    });
    return (
        <div>
            <button
                onClick={() => {
                    let result;
                    if (info.operator === '+') result = info.count + 1;
                    if (info.operator === '-') result = info.count - 1;
                    if (info.operator === '*') result = info.count * 1;
                    setInfo({ ...info, count: result });
                }}
            >
                {info.operator}1
            </button>
            <button onClick={() => setInfo({ ...info, show: !info.show })}>Show and Hide</button>
            <button
                onClick={() => {
                    const num = Math.floor(Math.random() * operators.length);
                    setInfo({ ...info, operator: operators[num] });
                }}
            >
                Change Operator
            </button>
            <br />
            {info.show && `Count: ${info.count}`}
        </div>
    );
}
