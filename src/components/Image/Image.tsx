import React, {ComponentProps} from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

interface Props extends ComponentProps<any> {
    src: string;
    alt?: string;
    sources?: JSX.Element[];
}

const Image = ({src, alt = '', className, sources, ...props}: Props) => (
    <picture>
        {sources?.map((source) => source)}
        <img className={classNames(styles.Image, className)} src={src} alt={alt} {...props} />
    </picture>
);

export default Image;
