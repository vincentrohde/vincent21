import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

const Button = ({ children }) => {
    return <a className={styles.button}>
        { children && children }
    </a>
}

export default Button;