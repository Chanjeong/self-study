import React, { useState } from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });
    const onScroll = (event) => {
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return state;
};
export default function useScroll() {
    const { y } = useScroll();
    return (
        <div style={{ height: '1000vh' }}>
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>H1</h1>
        </div>
    );
}
