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
                    title={'AERA Berlin'}
                    src={'/projects/aera.png'}
                    text={
                        'Portfolio page to promote a Berlin office building to potential investors.'
                    }
                    isWhite={false}
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
                    isWhite={false}
                    repo={'https://github.com/vincentrohde/harvest-dashboard'}
                    live={'https://harvest-dashboard.pages.dev/'}
                    tags={['React', 'Redux', 'Docker', 'Typescript', 'Rest API']}
                />

                {/*<ProjectPreview*/}
                {/*    title={'Bachelor Thesis'}*/}
                {/*    src={'/projects/school.png'}*/}
                {/*    text={*/}
                {/*        "Educational plattform, that returns tailor-made content based on the student's learning profile and recommends new content on observed preferences."*/}
                {/*    }*/}
                {/*    isWhite={true}*/}
                {/*    repo={'https://github.com/vincentrohde/bachelor'}*/}
                {/*    tags={['Node.js', 'Apostrophe CMS', 'MongoDB', 'Docker']}*/}
                {/*/>*/}
            </div>
        </section>
    );
};

export default Projects;
