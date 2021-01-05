import React, {ComponentProps} from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

interface Props extends ComponentProps<any> {
    src: string;
    alt?: string;
}

const Image = ({src, alt = '', className}: Props) => (
    <img className={classNames(styles.Image, className)} src={src} alt={alt} />
);

export default Image;
