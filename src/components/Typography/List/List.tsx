import React, {ComponentProps} from 'react';
import styles from './List.module.scss';
import classNames from 'classnames';

// Components
import Text from '../Text/Text';

interface Props extends ComponentProps<any> {
    items: string[];
    isHyphens?: boolean;
}

const List = ({items, isHyphens = true, className}: Props) => (
    <ul className={classNames(styles.List, {[styles.isHyphens]: isHyphens}, className)}>
        {items.map((item, index) => (
            <li key={index}>
                <Text>{item}</Text>
            </li>
        ))}
    </ul>
);

export default List;
