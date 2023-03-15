import React from 'react';
import styles from './Contact.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import SocialCard from '../../components/Cards/SocialCard/SocialCard';
import ScrollItem from '../../components/ScrollItem/ScrollItem';

const Contact = () => {
    return (
        <section className={styles.Contact} id={'contact'}>
            <div className={styles.head}>
                <ScrollItem>
                    <div className={styles.titleContainer}>
                        <Title level={2}>Let&apos;s work together</Title>
                    </div>

                    <div className={styles.textContainer}>
                        <Text>
                            I am always looking for opportunities to broaden my horizon. Let&apos;s
                            work together and build something amazing.
                        </Text>
                    </div>
                </ScrollItem>
            </div>
            <div className={styles.contactInfo}>
                <SocialCard
                    name={'Vincent Rohde'}
                    image={'./backgrounds/mountain.webp'}
                    location={'Berlin, Germany'}
                    mail={'mail@vincentroh.de'}
                    socials={[
                        {
                            name: 'Github',
                            link: 'https://github.com/vincentrohde',
                        },
                        {
                            name: 'Twitter',
                            link: 'https://twitter.com/vincentiscoding',
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default Contact;
