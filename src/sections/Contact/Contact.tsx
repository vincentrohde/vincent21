import React from 'react';
import styles from './Contact.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import SocialCard from '../../components/Cards/SocialCard/SocialCard';

const Contact = () => {
    return (
        <section className={styles.Contact}>
            <div className={styles.head}>
                <div className={styles.titleContainer}>
                    <Title level={2}>Let&apos;s work together</Title>
                </div>

                <div className={styles.textContainer}>
                    <Text>
                        By default, JSX doesn&apos;t let you render raw HTML from string values.
                        However, there is a way to make it do that
                    </Text>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <SocialCard
                    name={'Vincent Rohde'}
                    image={'./backgrounds/mountain.jpg'}
                    location={'Berlin, Germany'}
                    mail={'mail@vincentroh.de'}
                    socials={[
                        {
                            name: 'Github',
                            link: 'https://github.com/vincentrohde',
                            icon: '/logos/github.svg',
                        },
                        {
                            name: 'Twitter',
                            link: 'https://twitter.com/vincentiscoding',
                            icon: '/logos/twitter.svg',
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default Contact;
