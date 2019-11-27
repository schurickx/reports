import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';
import { Spinner } from 'react-bootstrap';

const Button = ({ onClick, label, style, type, colorType, submitting }) => {
  const setColor = () => {
    switch (colorType) {
      case 'red':
        return styles.redButton;
      case 'blue':
        return styles.blueButton;
      case 'green':
        return styles.greenButton;
      case 'dark-blue':
        return styles.darkBlueButton;
      default:
        return '';
    }
  };

  return (
    <button className={classNames(styles.button, setColor(), style)}
      onClick={onClick} disabled={submitting}
      type={type}>
        {submitting && <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />}      
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.string
};

export default Button;
