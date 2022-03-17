import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
import Header from './Header';
import IncomeStatement from '../Details/IncomeStats';
import { DataForChart, DataForTable } from '../../utils/helper';
import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Details = () => {
  const details = useSelector(({ singleStockReducer }) => singleStockReducer.details);
console.log(details)
//   useEffect(() => {
//     dispatch(fetchStockDetails());
//   }, []);

  return (
    <section className="pb-5">
        {
        details.map((item, index) => {
            return <h1 key={index}>{item.grossProfit}</h1>
        })

}
      
    </section>
  );
};

export default Details;
