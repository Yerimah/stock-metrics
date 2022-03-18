import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiFillAudio } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { fetchApiData } from '../../Redux/stocks/stocksThunks';
import styles from './details.module.css';
// import Company from '../Details/Company';
// import IncomeStatement from '../Details/IncomeStats';
// import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Details = () => {
  const details = useSelector(({ singleStockReducer }) => singleStockReducer.details);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchApiData());
  };

  return (
    <section className="pb-5">
      <div className={styles.nav}>
        <div className={styles.navbrand}>
        <NavLink to="/" onClick={clickHandler}>
          <div className={styles.navi}>
            <AiOutlineArrowLeft color="white" size={25} />
          </div>
        </NavLink>
        
        <div>
          <h1>Stock Metrics</h1>
        </div>
        </div>
        <Row className={styles.sethead}>
          <div className={styles.mic}>
            <AiFillAudio size={25}/>
          </div>
          <div>
            <IoMdSettings size={25} />
          </div>
        </Row>
      </div>
      {/* <Company /> */}
      <h2 className={styles.dataheading}>Company Data</h2>

      {
        details.map((item, id) => (
          <li className={styles.items} key={id}>
            <span>
              Calendar Year:
               {item.calendarYear}
            </span>
            <br />

            <div>
              <span>
                Total Revenue: 
                {item.revenue} 
                billion
              </span>
              <br />
              <span>
                Net Income: 
                {item.netIncome} 
                billion
              </span>
              <br />
              <span>
                Gross Profit: 
                {item.grossProfit} 
                billion
              </span>
            </div>
          </li>
        ))

}

    </section>
  );
};

export default Details;
