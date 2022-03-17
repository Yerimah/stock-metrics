import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiFillAudio } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';

const Header = () => {
//  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div>
      <AiOutlineArrowLeft onClick={() => navigate('/')} size={25} />
      </div>
      <div>
        <h1>Stock Metrics</h1>
      </div>
      <div>
      <AiFillAudio />
      </div>
      <div>
        <IoMdSettings />
      </div>
    </div>
  );
};

export default Header;

{/* style={{ float: 'left', marginTop: '0.3rem', cursor: 'pointer' }}
 className={styles.header}


<Row>
            <Col>
              <AiOutlineArrowLeft onClick={() => navigate('/')} size={25} />
            </Col>
          )}
          <Col xs={6}>
            <h4>Stock Metrics</h4>
          </Col>
          <Col xs={4} md={6}>
            <Row>
              <Col>
                <AiFillAudio />
              </Col>
              <Col>
                <IoMdSettings />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
