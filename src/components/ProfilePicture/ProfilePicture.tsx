import React from 'react';
import styles from './ProfilePicture.module.scss';
import classNames from 'classnames';

const ProfilePicture = () => (
    <img
        className={classNames(styles.ProfilePicture, 'shadow')}
        src={'./profile.jpg'}
        alt="Picture of Vincent Rohde"
    />
);

export default ProfilePicture;
