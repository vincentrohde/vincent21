import React from 'react';
import styles from './Footer.module.scss';
import Title from '../../components/Typography/Title/Title';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Title level={4}>© Vincent Rohde, 2020</Title>
        </footer>
    );
};

export default Footer;
