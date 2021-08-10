import React from 'react';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

const Container: React.FC = () => {
  return (
    <div className={classes.content}>
      <SortFilter />
      <TicketList />
    </div>
  );
};

export default Container;
