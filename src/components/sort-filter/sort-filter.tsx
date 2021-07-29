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
  
  // console.log(`filterType`, filterType);

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


{/*       <div
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
 */}

    </div>
  );
};

export default SortFilter;
