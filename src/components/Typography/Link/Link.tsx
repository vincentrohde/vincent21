import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import styles from './Link.module.scss';

// Components
import Button from '../../Button/Button';

interface Props extends ComponentProps<any> {
    color?: string;
}

const Link = ({color = 'pink', className, href = '', children}: Props) => (
    <Button
        className={classnames(styles.Link, className)}
        style={color}
        isGhost={true}
        isLink={true}
        isShadow={false}
        href={href}
    >
        {children}
    </Button>
);

export default Link;
