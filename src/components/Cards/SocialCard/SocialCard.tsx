import React, {ComponentProps, ReactNode} from 'react';
import styles from './SocialCard.module.scss';
import classnames from 'classnames';

// Components
import ShadowCard from '../ShadowCard/ShadowCard';
import OverlayImage from '../../OverlayImage/OverlayImage';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';
import Title from '../../Typography/Title/Title';
import Text from '../../Typography/Text/Text';
import Button from '../../Button/Button';
import ShadowBox from '../../ShadowBox/ShadowBox';
import ScrollItem from '../../ScrollItem/ScrollItem';

type SocialLink = {
    name: string;
    link: string;
    icon?: string;
};

interface Props extends ComponentProps<any> {
    name: string;
    image: string;
    location?: string;
    mail?: string;
    socials?: SocialLink[];
}

const SocialCard = ({name, image, location, mail, socials, className}: Props) => {
    const onClick = () => {
        console.log('Works');
    };

    return (
        <ScrollItem>
            <ShadowCard className={classnames(styles.SocialCard, className)} isWhite={true}>
                <div className={styles.header}>
                    <OverlayImage
                        className={styles.headerImage}
                        src={image}
                        overlay={styles.imageOverlay}
                    />
                    <div className={styles.socialAvatar}>
                        <ShadowBox shadowColor={'#7D65E8'} className={styles.avatarShadow}>
                            <div className={styles.imageWrapper}>
                                <ProfilePicture className={styles.avatarImg} />
                            </div>
                        </ShadowBox>
                    </div>
                </div>
                <div className={styles.content}>
                    <Title className={styles.center} level={4}>
                        {name}
                    </Title>
                    {location && <Text className={styles.center}>{location}</Text>}

                    {mail && (
                        <div className={styles.mailContainer}>
                            <Title className={styles.subtitle} level={4}>
                                Mail
                            </Title>
                            <div className={styles.addressContainer}>
                                <Text className={styles.email}>{mail}</Text>
                                {/*<Button isLink={false} style={'black'} clickHandler={onClick}>*/}
                                {/*    Copy*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                    )}

                    {socials && socials.length && (
                        <div className={styles.socialContainer}>
                            <Title className={styles.subtitle} level={4}>
                                Socials
                            </Title>
                            <div className={styles.socialButtonContainer}>
                                {socials.map((social, index) => (
                                    <Button
                                        key={index}
                                        icon={social.icon}
                                        href={social.link}
                                        className={styles.socialButton}
                                    >
                                        {social.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ShadowCard>
        </ScrollItem>
    );
};

export default SocialCard;
