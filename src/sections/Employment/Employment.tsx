import React from 'react';
import styles from './Employment.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import TabCard from '../../components/Cards/TabCard/TabCard';
import EmploymentSummary from '../../blocks/EmploymentSummary/EmploymentSummary';

const Employment = () => {
    const navigationItems = [
        {id: 'endava', value: 'Endava'},
        {id: 'tink', value: 'tink'},
    ];

    const data = [
        {
            id: 'endava',
            content: (
                <EmploymentSummary
                    duration={'2 years (Oct. 2018 - on going)'}
                    companyName={'Endava (prev. Exozet)'}
                    jobTitle={'Junior Developer'}
                    companyCaption={
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.'
                    }
                    summaryItems={[
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.',
                        'Village did removed enjoyed explain nor ham saw calling talking.',
                        'Village did removed enjoyed explain nor.',
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.',
                    ]}
                />
            ),
        },
        {
            id: 'tink',
            content: (
                <EmploymentSummary
                    companyName={'tink'}
                    duration={'3 months (Apr. 2018 - Jun. 2018)'}
                    jobTitle={'Junior Frontend Developer'}
                    companyCaption={
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.'
                    }
                    summaryItems={[
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.',
                        'Village did removed enjoyed explain nor ham saw calling talking.',
                        'Village did removed enjoyed explain nor.',
                        'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.',
                    ]}
                />
            ),
        },
    ];

    return (
        <div className={styles.Employment}>
            <Title className={styles.title} level={2}>
                Some companies I have worked with already
            </Title>
            <TabCard navigationItems={navigationItems} data={data} isLight={true} />
        </div>
    );
};

export default Employment;
