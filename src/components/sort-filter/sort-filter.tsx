import React from 'react';
import classes from './sort-filter.module.css';

interface sortFilterProps {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  filterType: any
}

const SortFilter: React.FC<sortFilterProps> = ({
  onFilterTypeChange,
  filterType
}) => {
  console.log(filterType.type);
  return (
    <div className={classes.sortFilter}>
      <div
        data-type="cheap"
        className={`${classes.sortFilterItem} ${(filterType.type === 'cheap') ? classes.activeSortFilterItem : ''}`}
        onClick={(e) => onFilterTypeChange(e)}>
        <span data-type="cheap"> Самый дешевый  </span>
      </div>
      <div
        data-type="quick"
        className={`${classes.sortFilterItem} ${(filterType.type === 'quick') ? classes.activeSortFilterItem : ''}`}
        onClick={(e) => onFilterTypeChange(e)}>
        <span data-type="quick"> Самый быстрый  </span>
      </div>
      <div className={classes.sortFilterItem}><span>  Оптимальный  </span> </div>
    </div>
  );
};

export default SortFilter;
