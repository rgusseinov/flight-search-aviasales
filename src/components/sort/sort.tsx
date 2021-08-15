import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSortType } from '../../features/sort/actions';
import { useTypedSelector } from '../../store';
import classes from './sort.module.css';

const Sort: React.FC = () => {

  const dispatch = useDispatch();
  const { sortType } = useTypedSelector(({ sort }) => sort);

  const onFilterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortType(e.target.value));
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
        <span> Самый дешевый </span> 
      </label>

      <label>
        <input
          type="radio"
          name="sortType"
          value="duration"
          checked={sortType === 'duration' ? true : false}
          onChange={onFilterTypeChange}
        />
        <span> Самый быстрый </span>
      </label>
     
    </div>
  );
};

export default Sort;
