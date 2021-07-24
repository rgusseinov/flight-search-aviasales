import React from 'react';
import classes from './sort-filter.module.css';

const SortFilter: React.FC = () => {
 return (
  <div className={classes.sortFilter}>
    <div className={classes.sortFilterItem}><span> Самый дешевый </span> </div>
    <div className={classes.sortFilterItem}><span> Самый быстрый </span> </div>
    <div className={classes.sortFilterItem}><span>  Оптимальный  </span> </div>
  </div>
 );
};

export default SortFilter;
