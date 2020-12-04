import React, {ComponentProps} from 'react';
import styles from './Title.module.scss';

interface Props extends ComponentProps<any> {
    level: number;
}

const Title = ({level, children}: Props) => {
    switch (level) {
        case 1:
            return <h1 className={styles.Title}>{children && children}</h1>;
        case 2:
            return <h2 className={styles.Title}>{children && children}</h2>;
        case 3:
            return <h3 className={styles.Title}>{children && children}</h3>;
        case 4:
            return <h4 className={styles.Title}>{children && children}</h4>;
        default:
            return <h3 className={styles.Title}>{children && children}</h3>;
    }
};

export default Title;
