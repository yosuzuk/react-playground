import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoAppReduxIsolated } from './todoAppRedux';
import HelloWorlds from './minimalExamples/components/HelloWorlds';

const App = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorlds />
        <TodoAppReduxIsolated id="todoApp1" />
        <TodoAppReduxIsolated id="todoApp2" />
    </div>
);

export default App;
