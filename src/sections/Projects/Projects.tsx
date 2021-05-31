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
                    title={'Harvest Dashboard'}
                    src={'/projects/clock.png'}
                    text={
                        'The Harvest Dashboard (third-party client) aims to improve the user experience when tracking time with Harvest. This is accomplished by simplifying the interface, while also adding visualisation of data.'
                    }
                    isWhite={false}
                    repo={'https://github.com/vincentrohde/harvest-dashboard'}
                    tags={['React', 'Redux', 'Docker', 'Typescript', 'Rest API']}
                />

                <ProjectPreview
                    title={'Bachelor Thesis'}
                    src={'/projects/school.png'}
                    text={
                        "Educational plattform, that returns tailor-made content based on the student's learning profile and recommends new content on observed preferences."
                    }
                    isWhite={true}
                    live={'/bachelor'}
                    repo={'https://github.com/vincentrohde/bachelor'}
                    tags={['Node.js', 'Apostrophe CMS', 'MongoDB', 'Docker']}
                />
            </div>
        </section>
    );
};

export default Projects;
