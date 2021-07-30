import React from 'react';
import { loadMoreProps } from '../../interfaces/load';
import classes from './load-more.module.css';

const LoadMore: React.FC<loadMoreProps> = ({ onTicketLimitChange }) => {
 return (
  <div className={classes.cardListItemLoadmore} onClick={(e) => onTicketLimitChange(e)}>
    <span> Показать еще 5 билета! </span>
  </div>
 );
};

export default LoadMore;
