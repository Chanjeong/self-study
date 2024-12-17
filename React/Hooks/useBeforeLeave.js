import React from 'react';

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== 'function') {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeChild('mouseleave', handle);
    }, []);
};

export default function useBeforeLeave() {
    const begForLife = () => console.log("Please Don't leave");
    useBeforeLeave(begForLife);
    return <div>useBeforeLeave</div>;
}
