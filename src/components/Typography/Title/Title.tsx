import React, {ComponentProps} from 'react';
import styles from './Title.module.scss';
import classNames from 'classnames';

interface Props extends ComponentProps<any> {
    level: number;
}

const Title = ({level, className, children}: Props) => {
    const style = classNames(styles.Title, className);
    const content = children && children;

    switch (level) {
        case 1:
            return <h1 className={style}>{content}</h1>;
        case 2:
            return <h2 className={style}>{content}</h2>;
        case 3:
            return <h3 className={style}>{content}</h3>;
        case 4:
            return <h4 className={style}>{content}</h4>;
        default:
            return <h3 className={style}>{content}</h3>;
    }
};

export default Title;
