import React, {ComponentProps} from 'react';
import styles from './Text.module.scss';

const Text = ({children}: ComponentProps<any>) => (
    <p className={styles.Text}>{children && children}</p>
);

export default Text;
