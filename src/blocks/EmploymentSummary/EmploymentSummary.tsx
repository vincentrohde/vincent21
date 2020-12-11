import React, {ComponentProps} from 'react';
import styles from './EmploymentSummary.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import List from '../../components/Typography/List/List';

interface Props extends ComponentProps<any> {
    companyName: string;
    jobTitle: string;
    companyCaption: string;
    duration: string;
    summaryItems: string[];
}

const EmploymentSummary = ({
    companyName,
    jobTitle,
    companyCaption,
    duration,
    summaryItems,
}: Props) => {
    return (
        <div className={styles.EmploymentSummary}>
            <div className={styles.contentContainer}>
                <Title className={styles.companyTitle} level={3}>
                    {companyName}
                </Title>
                <Title className={styles.jobTitle} level={4}>
                    {jobTitle}
                </Title>
                <Text>{companyCaption}</Text>
            </div>

            <div className={styles.contentContainer}>
                <Title className={styles.subtitle} level={4}>
                    Duration
                </Title>
                <Text>{duration}</Text>
            </div>

            <div className={styles.contentContainer}>
                <Title className={styles.subtitle} level={4}>
                    Summary
                </Title>
                <List className={styles.jobSummary} isHyphens={false} items={summaryItems} />
            </div>
        </div>
    );
};

export default EmploymentSummary;
