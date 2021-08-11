import React from 'react';
import Sort from '../sort/sort';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

const Container: React.FC = () => {
  return (
    <div className={classes.content}>
      <Sort />
      <TicketList />
    </div>
  );
};

export default Container;
