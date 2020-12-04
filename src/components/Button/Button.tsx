import React, {ComponentProps} from 'react';
import styles from './Button.module.scss';

const Button = ({children}: ComponentProps<any>) => {
    return <a className={styles.Button}>{children && children}</a>;
};

export default Button;
