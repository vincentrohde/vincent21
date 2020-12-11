import React from 'react';
import styles from './ProfilePicture.module.scss';

const ProfilePicture = () => (
    <img
        className={styles.ProfilePicture}
        src={
            'https://sm.ign.com/t/ign_de/blogroll/b/boruto-nar/boruto-naruto-the-movie-coming-to-us-theaters_kp62.1200.jpg'
        }
        alt="Picture of Vincent Rohde"
    />
);

export default ProfilePicture;
