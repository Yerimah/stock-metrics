import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import graph from '../../images/chart-graph.png';
import styles from '../Pages/dashboard.module.css';
import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Card = ({
  change, companyName, price, changesPercentage, id, companySymbol,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchStockDetails(companySymbol));
  };

  return (
    <Col className={styles.card} onClick={onClick}>
      <div>
        <NavLink to="/details">
          <BsArrowRightCircle className={styles.direct} onClick={onClick} />
        </NavLink>
        <span>
          <b>{companyName}</b>
        </span>
      </div>
      <div className="top-card">
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
                  <BsArrowUp color="green" />
                  {changesPercentage}
                </span>
                <span>
                  <BsArrowDown color="red" />
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
};

export default Card;
