import React from 'react';
import styles from './Tags.module.scss';

import Tag from './Tag/Tag';

interface Props {
    tags: string[];
}

const Tags = ({tags = []}: Props) => {
    return (
        <ul className={styles.Tags}>
            {tags.map((item, index) => (
                <Tag key={index} value={item} />
            ))}
        </ul>
    );
};

export default Tags;
