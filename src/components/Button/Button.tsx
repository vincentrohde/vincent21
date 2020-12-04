import React, {ComponentProps} from 'react';
import styles from './Button.module.scss';
// import classnames from 'classnames';

const Button = ({ children }: ComponentProps<any>) => {
    return <a className={styles.button}>
        { children && children }
    </a>
}

export default Button;