import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../../features/filters/actions';
import { useTypedSelector } from '../../store';
import classes from './sort.module.css';

const Sort: React.FC = () => {

  const dispatch = useDispatch();
  const { sortBy } = useTypedSelector(({ filters }) => filters);

  // top sort
  const onFilterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value;
    dispatch(setSortBy(sortType));
  };

  return (
    <div className={classes.sortFilter}>
      <label> 
        <input
          type="radio"
          name="sortBy"
          value="price"
          checked={sortBy === 'price' ? true : false}
          onChange={onFilterTypeChange}
        />
        Самый дешевый </label>

      <label>
        <input
          type="radio"
          name="sortBy"
          value="duration"
          checked={sortBy === 'duration' ? true : false}
          onChange={onFilterTypeChange}
        />
        Самый быстрый </label>

      <label htmlFor="radioOptimal">
        <input 
          type="radio"
          id="radioOptimal"
          name="optimal"
          value="optimal"
        />
        Оптимальный </label>
     
    </div>
  );
};

export default Sort;
