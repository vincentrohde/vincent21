import React, {useRef, useState} from 'react';
import styles from './About.module.scss';
import classNames from 'classnames';

// Custom components
import ScrollItem from '../../components/ScrollItem/ScrollItem';
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Link from '../../components/Typography/Link/Link';
import Card from '../../components/Cards/Card/Card';

const About = () => {
    const ref = useRef<HTMLElement>(null);
    const date = new Date();
    const time = date.toLocaleTimeString();
    const [isSideways, setIsSideways] = useState(false);

    const profilePictureAnimation = (newVisibillity: string, isScrollingDown: boolean) => {
        const isSidewaysTrue = newVisibillity === 'full' && isScrollingDown === true;
        const isSidewaysFalse = newVisibillity === 'entering' && isScrollingDown === false;

        if (isSidewaysTrue) {
            setIsSideways(true);
        }

        if (isSidewaysFalse) {
            setIsSideways(false);
        }
    };

    return (
        <section className={classNames(styles.About, {[styles.isSideways]: isSideways})} ref={ref}>
            <div className={classNames(styles.imageContainer, 'image-container')}>
                <ScrollItem customAnimationCallback={profilePictureAnimation}>
                    <ProfilePicture />
                </ScrollItem>
            </div>
            <Card className={classNames(styles.message, 'message')} isDynamicHeight>
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
                    {time}
                </Title>
            </Card>
        </section>
    );
};

export default About;
