import React from 'react';
import classes from './load-more.module.css';

interface loadMoreProps {
  onTicketLimitChange(e: React.SyntheticEvent<EventTarget>): void
}

const LoadMore: React.FC<loadMoreProps> = ({ onTicketLimitChange }) => {
 return (
  <div className={classes.cardListItemLoadmore} onClick={(e) => onTicketLimitChange(e)}>
    <span> Показать еще 5 билета! </span>
  </div>
 );
};

export default LoadMore;
