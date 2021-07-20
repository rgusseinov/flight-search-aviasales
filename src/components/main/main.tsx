import React from 'react';
import Content from '../content/content';
import LoadMore from '../load-more/load-more';
import SideBar from '../sidebar/sidebar';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './main.module.css';

const Main = () => {
 return (
  <div className={classes.main}>
    <SideBar />
    <Content />
  </div>
 );  
};

export default Main;
