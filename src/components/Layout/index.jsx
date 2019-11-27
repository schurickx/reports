import React from 'react';
import { connect } from "react-redux";
import { checkAuthRequestStart } from '../../redux/reducers/auth-reducer';
import Header from './Header/index';
import Footer from './Footer/index';
import styles from './Layout.module.css';
import Menu from './Menu/index';
import { Container } from 'react-bootstrap';
import { resetAuthData } from './../../redux/reducers/auth-reducer';


const Layout = ({ isAuth, checkAuthRequestStart, resetAuthData, children }) => {

  return (
    <React.Fragment>
      <Header resetAuthData={resetAuthData} isAuth={isAuth}/>
        <Container>
          <div className={styles.container}>
          {isAuth && <Menu/>}
          {children}
          </div>
        </Container>
      <Footer/>
    </React.Fragment>
  );
};

const mapStateToProps = ({auth}) => ({
  isAuth: auth.data
  // isAuth: true
})

export default connect(mapStateToProps, {checkAuthRequestStart, resetAuthData})(Layout);
