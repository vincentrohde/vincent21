import React from 'react';
import styles from './Contact.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import Button from '../../components/Button/Button';

const Contact = () => {
    const onClick = () => {
        console.log('Works');
    };

    return (
        <section className={styles.Contact}>
            <div className={styles.titleContainer}>
                <Title level={2}>Let&apos;s work together</Title>
            </div>

            <div className={styles.textContainer}>
                <Text>
                    By default, JSX doesn&apos;t let you render raw HTML from string values.
                    However, there is a way to make it do that
                </Text>
            </div>

            <div className={styles.mailContainer}>
                <Title className={styles.subtitle} level={4}>
                    Mail
                </Title>
                <div className={styles.addressContainer}>
                    <Text className={styles.email}>mail@vincentroh.de</Text>
                    <Button isLink={false} style={'black'} clickHandler={onClick}>
                        Copy
                    </Button>
                </div>
            </div>

            <div className={styles.socialContainer}>
                <Title className={styles.subtitle} level={4}>
                    Socials
                </Title>
                <div className={styles.socialButtonContainer}>
                    <Button
                        icon={'/logos/github.svg'}
                        href={'https://github.com/vincentrohde'}
                        className={styles.socialButton}
                    >
                        Github
                    </Button>
                    <Button
                        icon={'/logos/twitter.svg'}
                        href={'https://twitter.com/vincentiscoding'}
                        className={styles.socialButton}
                    >
                        Twitter
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
