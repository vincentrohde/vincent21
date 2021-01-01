import React from 'react';
import styles from './About.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Link from '../../components/Typography/Link/Link';
import Card from '../../components/Cards/Card/Card';

const About = () => {
    return (
        <section className={styles.About}>
            <div className={styles.imageContainer}>
                <ProfilePicture />
            </div>
            <Card className={styles.message}>
                <Title className={styles.title} level={2}>
                    Let me give you a short summary about myself :)
                </Title>
                <Text className={styles.text}>
                    Folly words widow one downs few age every seven. If miss part by fact he park
                    just shew. Discovered had get considered projection who favourable. Necessary up
                    knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use
                    off agreeable law unwilling sir deficient curiosity instantly.
                </Text>
                <Link color={'black'}>My Resume</Link>
                <Title className={styles.time} level={4}>
                    12:20
                </Title>
            </Card>
        </section>
    );
};

export default About;
