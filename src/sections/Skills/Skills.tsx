import React from 'react';
import styles from './Skills.module.scss';

// Custom components
import SkillCard from '../../components/Cards/SkillCard/SkillCard';

const Skills = () => {
    return (
        <section className={styles.Skills}>
            <div className={styles.background}></div>

            <SkillCard
                className={styles.card}
                title={'Web Development'}
                duration={'3 years'}
                technologiesText={
                    'CMS (Symfony, Wordpress, etc.), Databases (Mongo, MySQL), Docker, git, Preprocessors (Sass/ SCSS), Restful APIs, Templates (Twig, etc.), Webpack'
                }
                servicesItems={['Accessibillity', 'CMS', 'Deployment', 'SEO']}
            />

            <SkillCard
                className={styles.card}
                title={'JavaScript Development'}
                duration={'3 years'}
                technologiesText={
                    'Backend (Node.js, Express.js), Single Page Applications (React), Typescript, Bundling (Webpack), Static Site Generators (Gatsby, Next.js), State Management (Redux), Testing (Jest)'
                }
                servicesItems={[
                    'Single Page Applications',
                    'Backend Development (CMS/ API)',
                    'Animations',
                    'DOM Manipulation',
                ]}
            />
        </section>
    );
};

export default Skills;
