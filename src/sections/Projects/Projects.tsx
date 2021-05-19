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
                    src={'https://source.unsplash.com/600x400/?clock'}
                    text={
                        'The Harvest Dashboard (third-party client) aims to improve the user experience when tracking time with Harvest. This is accomplished by simplifying the interface, while also adding visualisation of data.'
                    }
                    isWhite={false}
                    live={'#'}
                    repo={'https://github.com/vincentrohde/harvest-dashboard'}
                    more={'#'}
                    tags={['React', 'Redux', 'Docker', 'Typescript', 'Rest API']}
                />

                <ProjectPreview
                    title={'Bachelor Thesis'}
                    src={'https://source.unsplash.com/600x400/?school'}
                    text={
                        "Educational plattform, that returns tailor-made content based on the student's learning profile and recommends new content on observed preferences."
                    }
                    isWhite={true}
                    live={'#'}
                    repo={'https://github.com/vincentrohde/bachelor'}
                    more={'#'}
                    tags={['Node.js', 'Apostrophe CMS', 'MongoDB', 'Docker']}
                />
            </div>
        </section>
    );
};

export default Projects;
