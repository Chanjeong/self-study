import React, { useRef } from 'react';

const useFullScreen = () => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullScreen();
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
    };
    return { element, triggerFull, exitFull };
};
export default function useFullScreen() {
    const { element, triggerFull, exitFull } = useFullScreen();
    return <div>useFullScreen</div>;
}
