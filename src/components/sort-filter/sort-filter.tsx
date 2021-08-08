import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setSortBy } from '../../redux/actions/filters';
// import { useTypedSelector } from '../../redux/useTypesSelector';
import classes from './sort-filter.module.css';

interface Props {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  // filterType: string | undefined 
}

const SortFilter: React.FC<Props> = ({  onFilterTypeChange }) => {

  // const dispatch = useDispatch();
  // const sortBy = useTypedSelector(state => state.filters);

  const handleFilterChange = (type: any) => {
    onFilterTypeChange(type);
  };


  return (
    <div className={classes.sortFilter}>
      <input
        type="radio"
        id="radioDesc"
        name="desc"
        value="desc"
        // checked={filterType === 'desc'}
        onChange={() => handleFilterChange({type: 'price', order: 'desc'})}
      />
      <label htmlFor="radioDesc"> Самый дешевый </label>

      <input
        type="radio"
        id="radioAsc"
        name="asc"
        value="asc"
        // checked={filterType === 'asc'}
        onChange={() => handleFilterChange({type: 'duration', order: 'desc'})}
      />
      <label htmlFor="radioAsc"> Самый быстрый </label>

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
