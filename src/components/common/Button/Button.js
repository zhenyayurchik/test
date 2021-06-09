import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {text}
    </button>
  );
};
export default Button;
