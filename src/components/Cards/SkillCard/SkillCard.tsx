import React, {ComponentProps} from 'react';
import classNames from 'classnames';
import styles from './SkillCard.module.scss';

// Custom components
import Title from '../../Typography/Title/Title';
import Text from '../../Typography/Text/Text';
import List from '../../Typography/List/List';
import TextCard from '../TextCard/TextCard';

interface Props extends ComponentProps<any> {
    title: string;
    duration: string;
    technologiesText: string;
    servicesItems: string[];
}

const SkillCard = ({title, duration, technologiesText, servicesItems, className}: Props) => {
    return (
        <TextCard className={classNames(styles.SkillCard, className)} isDark={true}>
            <Title className={styles.title} level={3}>
                {title}
            </Title>
            <div className={classNames(styles.contentContainer, styles.flexContainer)}>
                <Title
                    className={classNames(styles.subtitle, styles.isInline, styles.equalLineHeight)}
                    level={4}
                >
                    Since
                </Title>
                <Text className={styles.equalLineHeight}>{duration}</Text>
            </div>
            <div className={classNames(styles.contentContainer)}>
                <Title className={styles.subtitle} level={4}>
                    Technologies
                </Title>
                <Text>{technologiesText}</Text>
            </div>
            <div className={classNames(styles.contentContainer)}>
                <Title className={styles.subtitle} level={4}>
                    Services
                </Title>
                <List items={servicesItems} />
            </div>
        </TextCard>
    );
};

export default SkillCard;
