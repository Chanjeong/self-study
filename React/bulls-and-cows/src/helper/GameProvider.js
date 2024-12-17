import React, { useState, useEffect, createContext, useContext } from 'react';

const GameContext = createContext();

export function generateRandomNumber() {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const pickedNumbers = shuffle(candidates).splice(0, 4);
    return pickedNumbers;
}

export default function GameProvider({ children }) {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [answer, setAnswer] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        console.log(randomNumber);
    }, [randomNumber]);

    return (
        <GameContext.Provider
            value={{ randomNumber, setRandomNumber, answer, setAnswer, isSuccess, setSuccess, logs, setLogs }}
        >
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => {
    return useContext(GameContext);
};
