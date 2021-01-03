import React, {ComponentProps} from 'react';
import styles from './ImageCard.module.scss';
import classnames from 'classnames';

// Custom components
import ShadowCard from '../ShadowCard/ShadowCard';
import OverlayImage from '../../OverlayImage/OverlayImage';

interface Props extends ComponentProps<any> {
    src: string;
    isWhite?: boolean;
    isGradient?: boolean;
    overlay?: string;
}

const ImageCard = ({
    src,
    isWhite = false,
    isGradient = false,
    overlay,
    children,
    className,
}: Props) => {
    return (
        <ShadowCard
            isWhite={isWhite}
            className={classnames(
                styles.ImageCard,
                {[styles.isWhite]: isWhite},
                {[styles.isGradient]: isGradient},
                className,
            )}
        >
            <div className={styles.contentContainer}>{children && children}</div>
            <div className={styles.absoluteContainer}>
                <OverlayImage
                    src={src}
                    isWhite={isWhite}
                    isGradient={isGradient}
                    overlay={overlay}
                />
            </div>
        </ShadowCard>
    );
};

export default ImageCard;
