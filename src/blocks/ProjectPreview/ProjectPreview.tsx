import React, {ComponentProps} from 'react';
import styles from './ProjectPreview.module.scss';

// Custom components
import ImageCard from '../../components/Cards/ImageCard/ImageCard';
import Button from '../../components/Button/Button';
import Text from '../../components/Typography/Text/Text';
import Tags from '../../components/Tags/Tags';
import ScrollItem from '../../components/ScrollItem/ScrollItem';

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
            <ScrollItem>
                <div className={styles.content}>
                    <div className={styles.cardContainer}>
                        <ImageCard src={src} title={title} isWhite={isWhite} isGradient>
                            <h3 className={styles.cardTitle}>{title}</h3>
                        </ImageCard>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.linksContainer}>
                            {more.length > 0 && (
                                <Button href={more} style={'white'} isLink>
                                    More
                                </Button>
                            )}
                            {live.length > 0 && (
                                <Button href={live} style={'pink'} isLink>
                                    Live
                                </Button>
                            )}
                            {repo.length > 0 && (
                                <Button href={repo} style={'pink'} isLink>
                                    Source
                                </Button>
                            )}
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.textContainer}>
                                <Text>{text}</Text>
                            </div>
                            {tags.length > 0 && (
                                <div className={styles.tagsContainer}>
                                    <Tags tags={tags} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ScrollItem>
        </div>
    );
};

export default ProjectPreview;
