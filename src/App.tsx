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

Problems:

1. Как реалтзовать оптимальный фильтр(3-й по счету)
2. Если несколько фильтров делаешь одновременно, то фильтруется по первому запросу. Остальные не учитываются
3. Как доривать элементы, без полной загрузки(нового запроса на сервер)
4. Как обрабатывать ошибки 404, который выдает сервер. Нужно на экране показывать ?

*/

// Checked all https://codesandbox.io/s/festive-framework-8l2ez?file=/src/App.js:2118-2129