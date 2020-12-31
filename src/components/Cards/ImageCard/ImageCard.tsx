import React from 'react';
import styles from './ImageCard.module.scss';
import classnames from 'classnames';

// Custom components

import ShadowBox from '../../ShadowBox/ShadowBox';

interface Props {
    src: string;
    alt?: string;
    title?: string;
    isWhite?: boolean;
}

const ImageCard = ({src, alt = '', title, isWhite = false}: Props) => {
    return (
        <ShadowBox shadowColor={isWhite ? 'light' : 'dark'}>
            <div className={classnames(styles.ImageCard, {[styles.isWhite]: isWhite})}>
                {title && <h3 className={styles.imageTitle}>{title}</h3>}
                <div className={styles.imageContainer}>
                    <img src={src} alt={alt} />
                </div>
            </div>
        </ShadowBox>
    );
};

export default ImageCard;
