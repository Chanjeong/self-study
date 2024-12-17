import React, { useRef, useState } from 'react';
import Cat from './Cat';

export default function CatParent() {
    const [height, setHeight] = useState(0);

    console.log('부모 컴포넌트 CatParent');

    const ageRef = useRef(1);
    const catCallbackRef = (node) => {
        if (node !== null) {
            alert(node);
            setHeight(node.getBoundingClientRect().height);
        }
    };

    // console.log(ageRef.current);

    return (
        <div>
            <h4>키: {height} ️</h4>
            <h3>나이: {ageRef.current}살</h3>
            <div>
                <Cat ref={catCallbackRef} />

                {/* <button onClick={() => setState(state + 1)}></button> */}
            </div>
        </div>
    );
}
