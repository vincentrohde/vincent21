import React from 'react';
import styles from './ProfilePicture.module.scss';
import classNames from 'classnames';

// Custom components
import ShadowBox from '../ShadowBox/ShadowBox';
import Image from '../Image/Image';

interface PictureProps {
    isZoom?: boolean;
}

interface ShadowPictureProps {
    shadowColor?: string;
    isZoom?: PictureProps['isZoom'];
}

interface Props {
    isShadow?: boolean;
    shadowColor?: ShadowPictureProps['shadowColor'];
    isZoom?: PictureProps['isZoom'];
}

const IMAGE_SRC = './profile.jpg';
const IMAGE_ALT = 'Picture of Vincent Rohde';

const Picture = ({isZoom}: PictureProps) => (
    <Image
        className={classNames(styles.ProfilePicture, {[styles.isZoom]: isZoom}, 'shadow')}
        src={IMAGE_SRC}
        alt={IMAGE_ALT}
    />
);

const ZoomPicture = ({isZoom}: PictureProps) =>
    isZoom ? (
        <div className={styles.imageWrapper}>
            <Picture isZoom={isZoom} />
        </div>
    ) : (
        <Picture isZoom={isZoom} />
    );

const ShadowPicture = ({shadowColor, isZoom}: ShadowPictureProps) => (
    <ShadowBox shadowColor={shadowColor}>
        <ZoomPicture isZoom={isZoom} />
    </ShadowBox>
);

const ProfilePicture = ({isZoom = false, isShadow = false, shadowColor}: Props) =>
    isShadow ? (
        <>
            <ShadowPicture isZoom={isZoom} shadowColor={shadowColor} />
        </>
    ) : (
        <>
            <ZoomPicture isZoom={isZoom} />
        </>
    );

export default ProfilePicture;
