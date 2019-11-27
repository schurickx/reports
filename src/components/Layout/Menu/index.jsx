import React from "react";
import { menuStructure } from '../../../constants/menuStructure';
import styles from "./Menu.module.css";
import MenuItem from "./Item";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";

const mapStateToProps = ({ auth: { data } }) => ({
  authData: data
});

const Menu = ({ authData }) => {

  return (
      <div className={styles.container}>
        <Row noGutters>
          {menuStructure.map((item, index) => (
            <Col key={index}>
              <MenuItem authData={authData} {...item}/>
            </Col>
          ))}
        </Row>
      </div>
  );
};

export default connect(mapStateToProps)(Menu);
