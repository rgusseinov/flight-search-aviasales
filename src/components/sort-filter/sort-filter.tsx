import React from 'react';
import classes from './sort-filter.module.css';

interface Props {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  filterType: string | undefined 
}

const SortFilter: React.FC<Props> = ({  onFilterTypeChange, filterType }) => {

  return (
    <div className={classes.sortFilter}>
      <input
        type="radio"
        id="radioCheap"
        name="cheap"
        value="cheap"
        checked={filterType === 'cheap'}
        onChange={onFilterTypeChange}
      />
      <label htmlFor="radioCheap"> Самый дешевый </label>

      <input
        type="radio"
        id="radioQuick"
        name="quick"
        value="quick"
        checked={filterType === 'quick'}
        onChange={onFilterTypeChange}
      />
      <label htmlFor="radioQuick"> Самый быстрый </label>

      <input 
        type="radio"
        id="radioOptimal"
        name="optimal"
        value="optimal"
      />
      <label htmlFor="radioOptimal"> Оптимальный </label>
    </div>
  );
};

export default SortFilter;
