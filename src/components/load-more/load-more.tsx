import React from 'react';
import classes from './load-more.module.css';

const LoadMore: React.FC = () => {
 return (
  <div className={classes.cardListItemLoadmore}>
    <span> Показать еще 5 билетов! </span>
  </div>
 );
};

export default LoadMore;
