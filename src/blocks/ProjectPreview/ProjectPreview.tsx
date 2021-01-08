import React, {ComponentProps} from 'react';
import styles from './ProjectPreview.module.scss';

// Custom components
import ImageCard from '../../components/Cards/ImageCard/ImageCard';
import Button from '../../components/Button/Button';
import Text from '../../components/Typography/Text/Text';
import Tags from '../../components/Tags/Tags';

interface Props extends ComponentProps<any> {
    title: string;
    text: string;
    src: string;
    isWhite?: boolean;
    tags?: string[];
    live?: string;
    repo?: string;
    more?: string;
}

const ProjectPreview = ({
    title,
    text,
    src,
    isWhite = false,
    tags = [],
    live = '',
    repo = '',
    more = '',
}: Props) => {
    return (
        <div className={styles.ProjectPreview}>
            <div className={styles.cardContainer}>
                <ImageCard src={src} title={title} isWhite={isWhite} isGradient>
                    <h3 className={styles.cardTitle}>{title}</h3>
                </ImageCard>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.linksContainer}>
                    {more.length && (
                        <Button style={'white'} isLink>
                            More
                        </Button>
                    )}
                    {live.length && (
                        <Button style={'pink'} isLink>
                            Live
                        </Button>
                    )}
                    {repo.length && (
                        <Button style={'pink'} isLink>
                            Source
                        </Button>
                    )}
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <Text>{text}</Text>
                    </div>
                    {tags.length && (
                        <div className={styles.tagsContainer}>
                            <Tags tags={tags} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
