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
                            I am always looking for opportunities to broaden my horizon. If you are
                            in the business of web development, let’s work together and build the
                            page that changes the internet!
                        </Text>
                    </div>
                </ScrollItem>
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
