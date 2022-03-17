import React, { useEffect } from 'react';
import styles from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import graph from '../../images/chart-graph.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Card = ({ change, companyName, price, changesPercentage, id, companySymbol }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const onClick = () => {
    dispatch(fetchStockDetails(companySymbol))
  };

  // useEffect(() => {
  //   navigate(`/details/${companySymbol}`)
  // }, [])
  
    return (
  <Col onClick={onClick}>
    <div>
      <NavLink to="/details">
      <BsArrowRightCircle onClick={onClick}/>
      </NavLink>
      <span>
        <b>{companyName}</b>
      </span>
    </div>
    <div>
      <span>
        <h6>{id}</h6>
      </span>
      <span>
        <b>
          $
          {price}
        </b>
      </span>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <span>
                <BsArrowUp />
                {changesPercentage}
              </span>
              <span>
                <BsArrowDown />
                {change}
              </span>
            </div>
          </Col>
          <Col>
            <img src={graph} className={styles.chart} alt="chart" />
          </Col>
        </Row>
      </Container>
    </div>
  </Col>
);

}

export default Card;
