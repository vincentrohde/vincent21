import React, {ReactNode, ComponentProps} from 'react';
import styles from './WorkPreview.module.scss';
import classNames from 'classnames';

// Custom components
import ImageCard from '../../components/Cards/ImageCard/ImageCard';
import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';

type PreviewData = {
    title: string;
    src: string;
    description: ReactNode;
    emoji: string;
    isWhite?: boolean;
};

interface Props extends ComponentProps<any> {
    data: PreviewData;
}

const WorkPreview = ({data, className}: Props) => {
    const {title, src, description, emoji, isWhite = false} = data;
    return (
        <div className={classNames(styles.WorkPreview, className)}>
            <ImageCard src={src} isWhite={isWhite}>
                <div className={styles.previewContainer}>
                    {title && (
                        <Title className={styles.title} level={3}>
                            {title}
                        </Title>
                    )}
                    {description && <Text className={styles.description}>{description}</Text>}
                    {emoji && (
                        <Title className={styles.emoji} level={1}>
                            {emoji}
                        </Title>
                    )}
                </div>
            </ImageCard>
        </div>
    );
};

export default WorkPreview;
