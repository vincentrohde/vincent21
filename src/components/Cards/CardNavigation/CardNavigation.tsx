import React, {ComponentProps, useState} from 'react';
import styles from './CardNavigation.module.scss';
import classnames from 'classnames';

// Interfaces
import {ICardNavigationItem} from './CardNavigationItem/CardNavigationItem';

// Components
import CardNavigationItem from './CardNavigationItem/CardNavigationItem';

interface Props extends ComponentProps<any> {
    navigationItems: ICardNavigationItem[];
    clickHandler: (id: ICardNavigationItem['id']) => void;
}

const CardNavigation = ({navigationItems, clickHandler}: Props) => {
    const [activeId, setActiveId] = useState(navigationItems[0].id);

    const onClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        const navigationItem = target.closest('.js-card-navigation-item') as HTMLElement;

        if (typeof navigationItem === 'undefined') return;
        if (typeof navigationItem.dataset === 'undefined') return;
        if (typeof navigationItem.dataset.id === 'undefined') return;

        const id = navigationItem.dataset.id;

        setActiveId(id);
        clickHandler(id);
    };

    return (
        <ul className={classnames(styles.CardNavigation)} onClick={onClick}>
            {navigationItems.map((item, index) => (
                <CardNavigationItem
                    key={index}
                    id={item.id}
                    value={item.value}
                    isActive={activeId === item.id}
                />
            ))}
        </ul>
    );
};

export default CardNavigation;
