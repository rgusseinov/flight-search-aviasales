import React from 'react';
import styles from './sidebar.module.css';
import cn from 'classnames';

interface sideBarProps {
  onSortTypeChange(e: React.SyntheticEvent<EventTarget>): void
  sortType: any
}

const SideBar: React.FC<sideBarProps> = ({
  onSortTypeChange, sortType }) => {
  
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
              />
              <span className={styles.checkBox}></span> Все
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="stop1"
                checked={(sortType.stop1) ? true : false}
                onChange={(e) => onSortTypeChange(e)}
              />
              <span className={styles.checkBox}></span> 1 пересадка
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                name="stop2"
                checked={(sortType.stop2) ? true : false}
                onChange={(e) => onSortTypeChange(e)}
              />
              <span className={styles.checkBox}></span> 2 пересадки
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input 
                className={styles.checkInput} 
                type="checkbox"
                name="stop3"
                checked={(sortType.stop3) ? true : false}
                onChange={(e) => onSortTypeChange(e)}
              />
              <span className={styles.checkBox}></span> 3 пересадки
            </label>
          </div>

{/*           <div className="filter-item">
            <label className="check option">
              <input className="check__input" type="checkbox" />
              <span className="check__box"></span> 3 пересадки
            </label>
          </div> */}

        </div>

      </div>
  </div>
 );
};

export default SideBar;
