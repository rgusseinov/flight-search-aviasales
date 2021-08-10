import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { loadTickets } from './features/tickets/actions';

const App: React.FC = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTickets());
  }, []);

    return (<div>
      <Header />
      <Main />
    </div>);
};

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

// 4% + 500 tg
// 1500 rub = 560 tg
// 5547 5960 0656 7131

// 2500 tg
// 2 usd

