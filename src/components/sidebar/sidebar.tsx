import React from 'react';
import styles from './sidebar.module.css';
import cn from 'classnames';
import { IChecked } from '../../interfaces/filter';

interface Props {
  onAllFilterChange(e: React.SyntheticEvent<EventTarget>): void
  onFilterChange(type: string): void
  filters: IChecked
}

const SideBar: React.FC<Props> = ({ onFilterChange, onAllFilterChange, filters }) => {
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
                checked={filters["direct"]}
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
                checked={filters["oneStop"]}
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
                checked={filters["twoStop"]}
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
                checked={filters["threeStop"]}
              />
            <span className={styles.checkBox}></span> 3 пересадки
            </label>
          </div>

        </div>
      </div>
  </div>
 );
};

export default SideBar;
