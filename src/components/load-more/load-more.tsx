import React from 'react';
import classes from './load-more.module.css';

interface loadMoreProps {
  onTicketLimitChange(ticketLimit: number): void
  ticketLimit: number
}

const LoadMore: React.FC<loadMoreProps> = ({ onTicketLimitChange, ticketLimit }) => {
 return (
  <div className={classes.cardListItemLoadmore} onClick={() => onTicketLimitChange(ticketLimit + 1)}>
    <span> Показать еще 3 билета! </span>
  </div>
 );
};

export default LoadMore;
