import React from 'react';
import styles from './Work.module.scss';

// Custom components
import Title from '../../components/Typography/Title/Title';

// Blocks
import WorkPreview from '../../blocks/WorkPreview/WorkPreview';

const Work = () => {
    return (
        <section className={styles.Work}>
            <Title className={'sectionTitle'} level={2}>
                Work
            </Title>
            <div className={styles.previewContainer}>
                <WorkPreview
                    data={{
                        title: 'v1bes',
                        src: './works/v1bes-wide.webp',
                        description: (
                            <span>
                                As <b>Freelance Developer</b> I am part of a small Berlin based dev
                                team. Currently, we build and develop <b>SPAs</b> using <b>React</b>
                                .
                            </span>
                        ),
                        emoji: '✌️',
                        isWhite: true,
                    }}
                />
                <WorkPreview
                    className={styles.isHalf}
                    data={{
                        title: 'Endava (prev. Exozet)',
                        src: './works/exozet-square.webp',
                        description: (
                            <span>
                                As <b>Junior Developer</b> I was part of relaunching the media
                                library of the <b>ORF</b> (Austrian national public service
                                broadcaster)
                            </span>
                        ),
                        emoji: '🇦🇹',
                    }}
                />
                <WorkPreview
                    className={styles.isHalf}
                    data={{
                        title: 'tink',
                        src: './works/tink-square.webp',
                        description: (
                            <span>
                                As <b>Junior Frontend Developer</b> I boosted sales by developing/
                                deploying banners and content pages. I also took responsibility as
                                technical lead for the corporate blog.
                            </span>
                        ),
                        emoji: '🤖🏠',
                        isWhite: true,
                    }}
                />
                <WorkPreview
                    data={{
                        title: 'rts.fm berlin',
                        src: './works/rtsfm-wide.webp',
                        description: (
                            <span>
                                As <b>Freelancer</b> I was recording and editing videos of techno
                                music events in various clubs in Berlin. I also helped to promote
                                events by designing posters, banners and flyers.
                            </span>
                        ),
                        emoji: '💃',
                    }}
                />
            </div>
        </section>
    );
};

export default Work;
