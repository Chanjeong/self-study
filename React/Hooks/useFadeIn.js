import React from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
        return;
    }
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: { el }, style: { opacity: 0 } };
};

export default function useFadeIn() {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
        <div>
            <h1 {...fadeInH1}>Hello</h1>
        </div>
    );
}
