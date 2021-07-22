import classNames from 'classnames';
import React from 'react';
import LoadMore from '../load-more/load-more';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

interface ticketsProps {
  tickets: []
}

const Container: React.FC<ticketsProps> = ({ tickets }) => {
  return (
    <div className={classes.content}>
      <SortFilter />
      <TicketList tickets={tickets} />
      <LoadMore />
    </div>
  );
};

export default Container;
