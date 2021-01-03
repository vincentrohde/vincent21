import React, {ComponentProps} from 'react';
import classNames from 'classnames';
import styles from './OverlayImage.module.scss';

interface Props extends ComponentProps<any> {
    src: string;
    isWhite?: boolean;
    isGradient?: boolean;
    overlay?: string;
}

const OverlayImage = ({src, isWhite = false, isGradient = false, overlay, className}: Props) => {
    const imageStyle = {
        background: `url(${src})`,
        backgroundSize: 'cover',
    };

    const overlayStyle = {
        background: overlay,
    };

    return (
        <div
            className={classNames(
                styles.OverlayImage,
                {[styles.isWhite]: isWhite},
                {[styles.isGradient]: isGradient},
                className,
            )}
        >
            <div className={styles.overlay} style={overlayStyle} />
            <div className={styles.image} style={imageStyle} />
        </div>
    );
};

export default OverlayImage;
