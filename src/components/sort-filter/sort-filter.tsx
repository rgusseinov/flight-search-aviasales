import React from 'react';
import classes from './sort-filter.module.css';

interface sortFilterProps {
  onFilterTypeChange(type: boolean): void
  filterTypeCheap: boolean
}

const SortFilter: React.FC<sortFilterProps> = ({
  onFilterTypeChange, 
  filterTypeCheap 
}) => {
 return (
  <div className={classes.sortFilter}>
    <div 
      className={`${classes.sortFilterItem} ${filterTypeCheap ? classes.activeSortFilterItem : ''}`}
      onClick={() => onFilterTypeChange(!filterTypeCheap)}>
      <span> Самый дешевый  </span>
    </div>
    <div className={classes.sortFilterItem}><span> Самый быстрый </span> </div>
    <div className={classes.sortFilterItem}><span>  Оптимальный  </span> </div>
  </div>
 );
};

export default SortFilter;
