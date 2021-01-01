import React from 'react';
import styles from './Projects.module.scss';

// Custom blocks
import ProjectPreview from '../../blocks/ProjectPreview/ProjectPreview';

// Custom components
import Title from '../../components/Typography/Title/Title';

const Projects = () => {
    return (
        <div className={styles.Projects}>
            <div className={styles.titleContainer}>
                <Title level={2}>Projects</Title>
            </div>

            <div className={styles.contentContainer}>
                <ProjectPreview
                    title={'Harvest Dashboard'}
                    src={'https://source.unsplash.com/300x200/?whale'}
                    text={
                        'CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same CSS class name in different files without worrying about collisions.'
                    }
                    isWhite={false}
                    live={'#'}
                    repo={'#'}
                    more={'#'}
                    tags={['React', 'Node.js', 'Websockets', 'Node.js', 'Websockets', 'Node.js']}
                />

                <ProjectPreview
                    title={'Steelcase IoT Client'}
                    src={'https://source.unsplash.com/300x200/?robot'}
                    text={
                        'CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same CSS class name in different files without worrying about collisions.'
                    }
                    isWhite={true}
                    live={'#'}
                    repo={'#'}
                    more={'#'}
                    tags={['React', 'Node.js', 'Websockets']}
                />
            </div>
        </div>
    );
};

export default Projects;
