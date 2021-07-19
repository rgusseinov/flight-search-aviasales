import React from 'react';
import './App.css';

function App() {
  return (
    <div>

    <div className="main-header">
      <span className="header__logo"></span>
    </div>
      
    <div className="main">
      <div className="sidebar">
        <div className="filter-container">
          <div className="header"> Количество пересадок </div>
 
          <div className="filter-list_items">
            <div className="filter-item">
              <label className="check option">
                <input className="check__input" type="checkbox" defaultChecked={true} />
                <span className="check__box"></span> Все
              </label>
            </div>

            <div className="filter-item">
              <label className="check option">
                <input className="check__input" type="checkbox" />
                <span className="check__box"></span> Без пересадок
              </label>
            </div>

            <div className="filter-item">
              <label className="check option">
                <input className="check__input" type="checkbox" />
                <span className="check__box"></span> 1 пересадка
              </label>
            </div>

            <div className="filter-item">
              <label className="check option">
                <input className="check__input" type="checkbox" />
                <span className="check__box"></span> 2 пересадки
              </label>
            </div>

            <div className="filter-item">
              <label className="check option">
                <input className="check__input" type="checkbox" />
                <span className="check__box"></span> 3 пересадки
              </label>
            </div>
          </div>

        </div>
      </div>

      <div className="content">

        <div className="sort-filter">
          <div className="sort-filter__item"> <span> Самый дешевый </span> </div>
          <div className="sort-filter__item "> <span> Самый быстрый </span> </div>
          <div className="sort-filter__item"> <span>  Оптимальный  </span> </div>
        </div>

        <div className="card-list">

          <div className="card-list__item">
            <div className="card-list__item__header">
              <span> 13 400 Р  </span>
              <span className="card-list__item__logo"></span>
            </div>
            <div className="card-list__item__content">

              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>
               
              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>

            </div>

            
          </div>

          <div className="card-list__item">
            <div className="card-list__item__header">
              <span> 13 400 Р  </span>
              <span className="card-list__item__logo"></span>
            </div>
            <div className="card-list__item__content">

              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>
               
              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>

            </div>
          </div>

          <div className="card-list__item">
            <div className="card-list__item__header">
              <span> 13 400 Р  </span>
              <span className="card-list__item__logo"></span>
            </div>
            <div className="card-list__item__content">

              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>
               
              <div className="content__block__row">              
                <div className="content__block">
                  <span className="content__block__secondary">MOW – HKT</span>
                  <span className="content__block__main">10:45 – 08:00</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">В пути</span>
                  <span className="content__block__main">21ч 15м</span>
                </div>

                <div className="content__block">
                  <span className="content__block__secondary">2 пересадки</span>
                  <span className="content__block__main">HKG, JNB</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="card-list__item__loadmore">
          <span> Показать еще 5 билетов! </span>
        </div>

      </div>


    </div>
    </div>
    
  );
}

export default App;