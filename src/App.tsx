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