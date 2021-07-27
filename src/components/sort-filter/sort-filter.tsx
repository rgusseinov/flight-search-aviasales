import React from 'react';
import classes from './sort-filter.module.css';

interface sortFilterProps {
  onFilterTypeChange(type: boolean): void
  onFilterFastChange(type: boolean): void
  filterTypeCheap: boolean
  filterTypeFast: boolean
}

const SortFilter: React.FC<sortFilterProps> = ({
  onFilterTypeChange,
  onFilterFastChange,
  filterTypeCheap,
  filterTypeFast
}) => {
 return (
  <div className={classes.sortFilter}>
    <div 
      className={`${classes.sortFilterItem} ${filterTypeCheap ? classes.activeSortFilterItem : ''}`}
      onClick={() => onFilterTypeChange(!filterTypeCheap)}>
      <span> Самый дешевый  </span>
    </div>
    <div 
      className={`${classes.sortFilterItem} ${filterTypeFast ? classes.activeSortFilterItem : ''}`}
      onClick={() => onFilterFastChange(!filterTypeFast)}>
      <span> Самый быстрый </span>
    </div>
    <div className={classes.sortFilterItem}><span>  Оптимальный  </span> </div>
  </div>
 );
};

export default SortFilter;
