import React, { ChangeEvent } from 'react';
import styles from './filters.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setFilterAll, setFilterBy } from '../../features/filters/actions';
import { useTypedSelector } from '../../store';

const Filters: React.FC = () => {
  const { filterBy } = useTypedSelector(({ filters }) => filters);
  const { direct, oneStop, twoStop, threeStop} = filterBy;
  
  const allFiltersChecked = direct && oneStop && twoStop && threeStop;  

  const dispatch = useDispatch();
  const onFilterChange = (filter: string) => { 
    dispatch(setFilterBy(filter));
  };
  
  const onAllFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    dispatch(setFilterAll(checked));
  };

  return (
    <div className={cn(styles.sidebar)}>
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
                checked={filterBy["direct"]}
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
                checked={filterBy["oneStop"]}
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
                checked={filterBy["twoStop"]}
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
                checked={filterBy["threeStop"]}
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
