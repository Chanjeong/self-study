import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
    if (typeof onClick !== 'function') {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener('click', onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener('click', onClick);
            }
        };
    }, []);
};

export default function useClick() {
    const sayHello = () => {
        console.log('say Hello');
    };
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
}
