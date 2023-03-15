import React, {ComponentProps} from 'react';
import styles from './ProfilePicture.module.scss';
import classNames from 'classnames';

// Custom components
import Image from '../Image/Image';

const ProfilePicture = ({className}: ComponentProps<any>) => (
    <Image
        className={classNames(styles.ProfilePicture, className, 'shadow')}
        // srcset={'./profile-350w.webp 350w, ./profile-640w.webp 640w, ./profile.webp 1000w'}
        // sizes={'(max-width: 400px) 350px, (max-width: 768px) 640px, 1000px'}
        // sizes={'(min-width: 768px) 1000px, (min-width: 400px) 640px, 350px'}
        sources={[
            <source key={'large'} srcSet="./profile.webp" media="(min-width: 768px)" />,
            <source key={'medium'} srcSet="./profile-640w.webp" media="(min-width: 400px)" />,
        ]}
        src={'./profile-350w.webp'}
        alt={'Picture of Vincent Rohde'}
    />
);

export default ProfilePicture;
