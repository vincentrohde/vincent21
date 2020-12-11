import React from 'react';
import styles from './About.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Link from '../../components/Typography/Link/Link';

const About = () => {
    return (
        <div className={styles.About}>
            <Title className={styles.title} level={2}>
                Let me give you a short summary about myself :)
            </Title>
            <Text className={styles.text}>
                Folly words widow one downs few age every seven. If miss part by fact he park just
                shew. Discovered had get considered projection who favourable. Necessary up
                knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off
                agreeable law unwilling sir deficient curiosity instantly.
            </Text>
            <Link>My Resume</Link>
            <div className={styles.imageContainer}>
                <ProfilePicture />
            </div>
        </div>
    );
};

export default About;
