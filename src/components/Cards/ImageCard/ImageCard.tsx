import React, {ComponentProps} from 'react';
import styles from './ImageCard.module.scss';
import classnames from 'classnames';

// Custom components

import Card from '../Card/Card';
import ShadowBox from '../../ShadowBox/ShadowBox';

interface Props extends ComponentProps<any> {
    src: string;
    isWhite?: boolean;
}

const ImageCard = ({src, isWhite = false, children, className}: Props) => {
    const imageStyle = {
        background: `url(${src})`,
        backgroundSize: 'cover',
    };
    return (
        <ShadowBox shadowColor={isWhite ? 'light' : 'dark'}>
            <Card className={classnames(styles.ImageCard, {[styles.isWhite]: isWhite}, className)}>
                <div className={styles.contentContainer}>{children && children}</div>
                <div className={styles.absoluteContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image} style={imageStyle} />
                    </div>
                </div>
            </Card>
        </ShadowBox>
    );
};

export default ImageCard;
