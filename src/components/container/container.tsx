import classNames from 'classnames';
import React from 'react';
import LoadMore from '../load-more/load-more';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

const Container = () => {
 return (
  <div className={classes.content}>
    <SortFilter />
    <TicketList />
    <LoadMore />
  </div>
 );  
};

export default Container;
