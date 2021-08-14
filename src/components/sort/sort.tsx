import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../../features/sort/actions';
import { useTypedSelector } from '../../store';
import classes from './sort.module.css';

const Sort: React.FC = () => {

  const dispatch = useDispatch();
  const { sortType } = useTypedSelector(({ sort }) => sort);

  const onFilterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className={classes.sortFilter}>
      <label> 
        <input
          type="radio"
          name="sortType"
          value="price"
          checked={sortType === 'price' ? true : false}
          onChange={onFilterTypeChange}
        />
        Самый дешевый </label>

      <label>
        <input
          type="radio"
          name="sortType"
          value="duration"
          checked={sortType === 'duration' ? true : false}
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
