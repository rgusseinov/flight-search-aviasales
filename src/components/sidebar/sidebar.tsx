import React from 'react';
import styles from './sidebar.module.css';
import cn from 'classnames';
// import { useState } from 'react';

interface sideBarProps {
  onStopChangeAll(evt: React.FormEvent<HTMLInputElement>, type: boolean): void
  onStopChange1(evt: React.FormEvent<HTMLInputElement>, type: boolean): void
  onStopChange2(evt: React.FormEvent<HTMLInputElement>, type: boolean): void
  onStopChange3(evt: React.FormEvent<HTMLInputElement>, type: boolean): void
  stopTypeAll: boolean | undefined
  stopType1: boolean | undefined
  stopType2: boolean | undefined
  stopType3: boolean | undefined  
}

const SideBar: React.FC<sideBarProps> = ({ 
  onStopChangeAll, 
  onStopChange1,
  onStopChange2,
  onStopChange3,
  stopTypeAll, 
  stopType1, 
  stopType2, 
  stopType3 }) => {
  
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
                  checked={stopTypeAll}
                  onChange={(evt) => onStopChangeAll(evt, !stopTypeAll)}
              />
              <span className={styles.checkBox}></span> Все
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input 
                className={styles.checkInput} 
                type="checkbox"
                checked={stopType1}
                onChange={(evt) => onStopChange1(evt, !stopType1)}
               />
              <span className={styles.checkBox}></span> 1 пересадка
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input
                className={styles.checkInput} 
                type="checkbox"
                checked={stopType2}
                onChange={(evt) => onStopChange2(evt, !stopType2)}
              />
              <span className={styles.checkBox}></span> 2 пересадки
            </label>
          </div>

          <div className={cn(styles.filterItem)}>
            <label className={cn(styles.check, styles.option)}>
              <input 
                className={styles.checkInput} 
                type="checkbox"
                checked={stopType3}
                onChange={(evt) => onStopChange3(evt, !stopType3)}
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
