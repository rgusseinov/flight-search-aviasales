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

    return (
      <div>
        <Header />
        <Main />
      </div>
    );
};

export default App;
