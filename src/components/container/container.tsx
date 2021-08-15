import React from 'react';
import { useTypedSelector } from '../../store';
import Loader from '../loader/loader';
import Sort from '../sort/sort';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

const Container: React.FC = () => {
  const { isLoaded } = useTypedSelector(({ tickets }) => tickets);
  return (
    <div className={classes.content}>
      <Sort />
      { !isLoaded ? (<Loader />) : <TicketList /> }
    </div>
  );
};

export default Container;
