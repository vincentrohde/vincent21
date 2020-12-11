import React, {useState, useEffect, ReactNode} from 'react';
import styles from './TabCard.module.scss';
import classnames from 'classnames';

// Components
import CardNavigation from '../CardNavigation/CardNavigation';
import TextCard from '../TextCard/TextCard';

// Interfaces
import {ICardNavigationItem} from '../CardNavigation/CardNavigationItem/CardNavigationItem';

interface dataItem {
    id: ICardNavigationItem['id'];
    content: ReactNode;
}

interface Props {
    navigationItems: ICardNavigationItem[];
    data: dataItem[];
    isLight?: boolean;
}

const TabCard = ({navigationItems, data, isLight = false}: Props) => {
    const [content, setContent] = useState(data[0].content);

    const getContentFromData = (id: ICardNavigationItem['id']) => {
        return data.filter((item) => item.id === id)[0].content;
    };

    const onClick = (id: ICardNavigationItem['id']) => {
        setContent(getContentFromData(id));
    };

    return (
        <div className={classnames(styles.TabCard)}>
            <TextCard
                className={styles.isRelative}
                navigationItems={navigationItems}
                navigationClickHandler={onClick}
                isLight={isLight}
            >
                <div className={styles.navigationContainer}>
                    <CardNavigation navigationItems={navigationItems} clickHandler={onClick} />
                </div>
                {content && content}
            </TextCard>
        </div>
    );
};

export default TabCard;
