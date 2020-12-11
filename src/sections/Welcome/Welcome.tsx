import React from 'react';
import styles from './Welcome.module.scss';

// Custom components
import Button from '../../components/Button/Button';
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import Logo from '../../components/Icons/Logo/Logo';

const Welcome = () => {
    return (
        <div className={styles.Welcome}>
            <Title level={1}>Vincent Rohde</Title>
            <h2 className={styles.label}>JavaScript & Web Developer</h2>
            <div className={styles.textContainer}>
                <Text className={styles.introText}>
                    I am a Berlin (Germany) based web-developer. Who specializes in building (and
                    sometimes also designing) amazing applications for the internet.
                </Text>
            </div>
            <div className={styles.buttonContainer}>
                <Button style={'pink'}>Contact me</Button>
            </div>
            <div className={styles.logoContainer}>
                <Logo fill={styles.logoColor} />
            </div>
        </div>
    );
};

export default Welcome;
