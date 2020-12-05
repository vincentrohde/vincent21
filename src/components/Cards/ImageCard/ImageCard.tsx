import React from 'react';
import styles from './ImageCard.module.scss';
import classnames from 'classnames';

interface Props {
    src: string;
    alt?: string;
    title?: string;
    isWhite?: boolean;
}

const ImageCard = ({src, alt = '', title, isWhite = false}: Props) => {
    return (
        <div className={classnames(styles.ImageCard, {[styles.isWhite]: isWhite})}>
            {title && <h3 className={styles.imageTitle}>{title}</h3>}
            <div className={styles.imageContainer}>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default ImageCard;
