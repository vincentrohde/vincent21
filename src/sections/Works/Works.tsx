import React from 'react';
import styles from './Works.module.scss';

// Custom blocks
import WorkPreview from '../../blocks/WorkPreview/WorkPreview';

// Custom components
import Title from '../../components/Typography/Title/Title';

const Works = () => {
    return (
        <div className={styles.Works}>
            <div className={styles.titleContainer}>
                <Title level={2}>Recent Works</Title>
            </div>

            <div className={styles.contentContainer}>
                <WorkPreview
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

                <WorkPreview
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

export default Works;
