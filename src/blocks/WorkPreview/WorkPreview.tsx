import React, {ReactNode} from 'react';
import styles from './WorkPreview.module.scss';

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

interface Props {
    data: PreviewData;
}

const WorkPreview = ({data}: Props) => {
    const {title, src, description, emoji, isWhite = false} = data;
    return (
        <div className={styles.WorkPreview}>
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
