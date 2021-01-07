import React, {ComponentProps} from 'react';
import styles from './ProfilePicture.module.scss';
import classNames from 'classnames';

// Custom components
import Image from '../Image/Image';

const IMAGE_SRC = './profile.jpg';
const IMAGE_ALT = 'Picture of Vincent Rohde';

const ProfilePicture = ({className}: ComponentProps<any>) => (
    <Image
        className={classNames(styles.ProfilePicture, className, 'shadow')}
        src={IMAGE_SRC}
        alt={IMAGE_ALT}
    />
);

export default ProfilePicture;
