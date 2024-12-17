import React from 'react';
import AnswerNumber from './components/AnswerNumber';
import AttemptLogs from './components/AttemptLogs';
import InputNumber from './components/InputNumber';

export default function Game() {
    return (
        <main className="App">
            <h1>숫자 야구 게임</h1>
            <AnswerNumber />
            <InputNumber />
            <AttemptLogs />
        </main>
    );
}
