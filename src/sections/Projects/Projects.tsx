import React from 'react';
import styles from './Projects.module.scss';

// Custom blocks
import ProjectPreview from '../../blocks/ProjectPreview/ProjectPreview';

// Custom components
import Title from '../../components/Typography/Title/Title';

const Projects = () => {
    return (
        <section className={styles.Projects}>
            <div className={'sectionTitle'}>
                <Title level={2}>Projects</Title>
            </div>

            <div>
                <ProjectPreview
                    title={'Alfred Toepfer Stiftung'}
                    src={'/projects/toepfer.png'}
                    text={
                        'The Alfred-Toepfer-Stiftung is a German foundation, which was established in 1931. Its goal is to promote unification and understanding among the different cultures and countries in Europe.'
                    }
                    live={'https://www.toepfer-stiftung.de/'}
                    tags={['React', 'Next.js', 'Typescript', 'Storybook']}
                />

                <ProjectPreview
                    title={'AERA Berlin'}
                    src={'/projects/aera.png'}
                    text={
                        'Portfolio page to promote a Berlin office building to potential investors.'
                    }
                    live={'https://aera.berlin/'}
                    more={'https://www.bauwens.de/projects/aera-berlin'}
                    tags={['React', 'Next.js', 'Typescript']}
                />

                <ProjectPreview
                    title={'Harvest Dashboard'}
                    src={'/projects/clock.png'}
                    text={
                        'The Harvest Dashboard (third-party client) aims to improve the user experience when tracking time with Harvest. This is accomplished by simplifying the interface, while also adding visualisation of data.'
                    }
                    repo={'https://github.com/vincentrohde/harvest-dashboard'}
                    live={'https://harvest-dashboard.pages.dev/'}
                    tags={['React', 'Redux', 'Docker', 'Typescript', 'Rest API']}
                />
            </div>
        </section>
    );
};

export default Projects;
