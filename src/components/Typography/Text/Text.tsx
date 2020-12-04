import React, {ComponentProps} from 'react';
import styles from './Text.module.scss';
import classnames from 'classnames';

interface Props extends ComponentProps<any> {
    isWhite?: boolean;
}

const Text = ({isBlack = false, children}: Props) => {
    return (
        <p className={classnames(styles.Text, {[styles.isBlack]: isBlack})}>
            {children && children}
        </p>
    );
};

export default Text;
