import React from 'react';
import { loadMoreProps } from '../../interfaces/load';
import { LOAD_MORE_COUNT } from '../../utils/utils';
import classes from './load-more.module.css';

const LoadMore: React.FC<loadMoreProps> = ({ onTicketLimitChange }) => {
 return (
  <div className={classes.cardListItemLoadmore} onClick={(e) => onTicketLimitChange(e)}>
    <span> Показать еще {LOAD_MORE_COUNT} билета! </span>
  </div>
 );
};

export default LoadMore;
