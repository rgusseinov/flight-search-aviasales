import React from 'react';
import './app.module.css';
import Body from './components/body/body';
import Header from './components/header/header';

const App: React.FC = () => (
    <div>
      <Header />
      <Body />
    </div>    
);

export default App;

/*

What to lear:

1. Typescript syntetics event
2. Types, how to mention array of objects
2. Where define any ? where no need to define any

*/

// Checked all https://codesandbox.io/s/festive-framework-8l2ez?file=/src/App.js:2118-2129