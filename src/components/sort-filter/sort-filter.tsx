import React from 'react';
import classes from './sort-filter.module.css';

interface sortFilterProps {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  filterType: any 
}

const SortFilter: React.FC<sortFilterProps> = ({  onFilterTypeChange, filterType }) => {

  return (
    <div className={classes.sortFilter}>
      <input type="radio"
             id="radioCheap"
             name="cheap"
             value="cheap"
             checked={(filterType.cheap) ? true : false }
             onChange={(e) => onFilterTypeChange(e)}
      />
      <label htmlFor="radioCheap"> Самый дешевый </label>

      <input
        type="radio"
        id="radioQuick"
        name="quick"
        value="quick"
        checked={(filterType.quick) ? true : false }
        onChange={(e) => onFilterTypeChange(e)}
      />
      <label htmlFor="radioQuick"> Самый быстрый </label>

      <input type="radio" id="radioOptimal" name="optimal" value="optimal" />
      <label htmlFor="radioOptimal"> Оптимальный </label>
    </div>
  );
};

export default SortFilter;
