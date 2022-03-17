import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CardList = () => {

    const data = useSelector((state) => state.Reducer)
console.log(data)
    return (
    <>
      <ul className="stockList">
          {
              data.length === 0 ? <h1>Loading...</h1> :
        data.stocks.map((item, index) => (
            <Card
            key={index}
            change={item.change}
            companyName={item.name}
            price={item.price}
            changesPercentage={item.changesPercentage}
            id={item.id}
            companySymbol={item.symbol}
            />
        ))
            }
      </ul>
    </>
  );
        }

export default CardList;
