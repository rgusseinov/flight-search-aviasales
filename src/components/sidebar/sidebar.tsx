import React from 'react';
import styles from './sidebar.module.css';
import cn from 'classnames';
import { IChecked } from '../../interfaces/filter';

interface sideBarProps {
  selectAll(e: React.SyntheticEvent<EventTarget>): void
  toggleCheck(type: string): void
  checked: IChecked,
  checkedAll: boolean
}

/* direct: true,
oneStop: true,
twoStop: true,
threeStop: true */

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
                name="direct"
                onChange={() => toggleCheck("direct")}
                checked={checked["direct"]}
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
                onChange={() => toggleCheck("oneStop")}
                checked={checked["oneStop"]}
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
                onChange={() => toggleCheck("twoStop")}
                checked={checked["twoStop"]}
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
                onChange={() => toggleCheck("threeStop")}
                checked={checked["threeStop"]}
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
