import React, { ChangeEvent } from 'react';
import styles from './filters.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setFilterType, setFilterTypeAll } from '../../features/filters/actions';
import { useTypedSelector } from '../../store';

const Filters: React.FC = () => {
  const filterType = useTypedSelector(({ filters }) => filters);
  const { direct, oneStop, twoStop, threeStop} = filterType;  
  const allFiltersChecked = direct && oneStop && twoStop && threeStop;  

  const dispatch = useDispatch();
  const onFilterChange = (filter: string) => { 
    dispatch(setFilterType(filter));
  };
  
  const onAllFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked: boolean = e.target.checked;
    dispatch(setFilterTypeAll(checked));
  };

  return (
    <div className={cn(styles.filter)}>
      <div className={cn(styles.filterContainer)}>
        <div className={cn(styles.header)}> Количество пересадок </div>

        <div className={cn(styles.filterListItems)}>
          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput}
                type="checkbox"
                checked={allFiltersChecked}
                onChange={(event) => onAllFilterChange(event)}
              />
            <span className={styles.checkBox}></span> Все
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="direct"
                onChange={() => onFilterChange("direct")}
                checked={filterType["direct"]}
              />
            <span className={styles.checkBox}></span> Без пересадок
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="oneStop"
                onChange={() => onFilterChange("oneStop")}
                checked={filterType["oneStop"]}
              />
            <span className={styles.checkBox}></span> 1 пересадка
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="twoStop"
                onChange={() => onFilterChange("twoStop")}
                checked={filterType["twoStop"]}
              />
              <span className={styles.checkBox}></span> 2 пересадки
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="threeStop"
                onChange={() => onFilterChange("threeStop")}
                checked={filterType["threeStop"]}
              />
            <span className={styles.checkBox}></span> 3 пересадки
            </label>
          </div>

        </div>
      </div>
  </div>
 );
};

export default Filters;
