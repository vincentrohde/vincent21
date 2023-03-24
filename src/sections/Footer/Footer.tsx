import React from 'react';
import styles from './Footer.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.contentContainer}>
                <Title level={4}>© Vincent Rohde, twenty-23</Title>
            </div>
        </footer>
    );
};

export default Footer;
