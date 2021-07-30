import React from 'react';
import styles from './sidebar.module.css';
import cn from 'classnames';

interface sideBarProps {
  selectAll(e: React.SyntheticEvent<EventTarget>): void
  toggleCheck(type: string): void
  checked: any,
  checkedAll: any
}

const SideBar: React.FC<sideBarProps> = ({ toggleCheck, selectAll, checked, checkedAll }) => {
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
                  onChange={(event) => selectAll(event)}
                  checked={checkedAll}
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
                onChange={() => toggleCheck("stop1")}
                checked={checked["stop1"]}
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
                onChange={() => toggleCheck("stop2")}
                checked={checked["stop2"]}
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
                onChange={() => toggleCheck("stop3")}
                checked={checked["stop3"]}
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
