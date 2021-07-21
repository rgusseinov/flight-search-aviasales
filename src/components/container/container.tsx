import classNames from 'classnames';
import React from 'react';
import LoadMore from '../load-more/load-more';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';


const Container: React.FC = () => {
  const tickets: any = [{price: 1, carrier: '2021-05-05'}];
  return (
    <div className={classes.content}>
      <SortFilter />
      <TicketList tickets={tickets} />
      <LoadMore />
    </div>
  );
};

export default Container;
