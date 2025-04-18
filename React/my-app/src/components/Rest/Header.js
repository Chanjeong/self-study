import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
    const count = 10;
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
            {!!count && <h1>Message: {count}</h1>}
        </header>
    );
}
