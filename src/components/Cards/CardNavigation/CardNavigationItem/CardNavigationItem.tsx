import React, {ComponentProps} from 'react';
import styles from './CardNavigationItem.module.scss';
import classnames from 'classnames';

// Components
import Title from '../../../Typography/Title/Title';

export interface ICardNavigationItem {
    id: string;
    value: string;
}

interface Props extends ComponentProps<any> {
    id: ICardNavigationItem['id'];
    value: ICardNavigationItem['value'];
    isActive?: boolean;
}

const CardNavigationItem = ({id, value, isActive}: Props) => {
    return (
        <li
            className={classnames(
                styles.CardNavigationItem,
                {[styles.isActive]: isActive},
                'js-card-navigation-item',
            )}
            data-id={id}
        >
            <Title level={3}>{value}</Title>
        </li>
    );
};

export default CardNavigationItem;
