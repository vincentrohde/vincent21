import React from 'react';
import styles from './Welcome.module.scss';

// Custom components
import Button from '../../components/Button/Button';
import Title from '../../components/Typography/Title/Title';
import Logo from '../../components/Icons/Logo/Logo';

const Welcome = () => {
    return (
        <div className={styles.Welcome}>
            <div className={styles.logoContainer}>
                <Logo fill={styles.logoColor} />
            </div>
            <Title level={1} className={styles.heading}>
                Hey, I am
                <br className={styles.isMobileOnly} />
                <span className={styles.isWhite}>Vincent Rohde.</span> A Berlin based{' '}
                <span className={styles.isPink}>Web Developer</span> and sometimes{' '}
                <span className={styles.isPink}>Designer.</span>
            </Title>
            <div className={styles.buttonContainer}>
                <Button style={'pink'}>Contact me</Button>
            </div>
        </div>
    );
};

export default Welcome;
