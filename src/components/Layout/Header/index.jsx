import React from 'react';
import styles from './Header.module.css';
import { Col, Row } from "react-bootstrap";
import { resetAuthData } from './../../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';


const Header = ({ resetAuthData, isAuth }) => {

  const logOut = () => resetAuthData()

  return (
    <div className={styles.container}>
      <div className="container">
        <Row noGutters className='row justify-content-md-center'>
          <Col className={styles.backgroundImage}>
            <Row noGutters>
              <Col className={styles.ministrySection}>
                <div className={styles.ministry}>
                  Управление военного образования Главного управления кадров <br />
                  Министерства обороны Российской Федерации
                  </div>
                <div className={styles.library}>
                  СИСТЕМА КОНСОЛИДИРОВАННОЙ ОТЧЕТНОСТИ
                {isAuth ? <div onClick={logOut}
                    className={styles.logout}>выход</div> : null}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header

