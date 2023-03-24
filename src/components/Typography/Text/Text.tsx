import React, {ComponentProps} from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames';

const Text = ({className, children}: ComponentProps<any>) => (
    <p className={classNames(styles.Text, className)}>{children && children}</p>
);

export default Text;
