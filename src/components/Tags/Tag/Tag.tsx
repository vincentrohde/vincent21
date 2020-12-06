import React from 'react';
import styles from './Tag.module.scss';
import Text from '../../Typography/Text/Text';

interface Props {
    value: string;
}

const Tag = ({value = ''}: Props) => (
    <li className={styles.Tag}>
        <Text>{value}</Text>
    </li>
);

export default Tag;
