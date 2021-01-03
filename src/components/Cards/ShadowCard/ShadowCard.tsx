import React, {ComponentProps} from 'react';

// Custom components
import Card from '../Card/Card';
import ShadowBox from '../../ShadowBox/ShadowBox';

interface Props extends ComponentProps<any> {
    isWhite?: boolean;
}

const ShadowCard = ({isWhite = false, children, className}: Props) => {
    return (
        <ShadowBox shadowColor={isWhite ? 'light' : 'dark'}>
            <Card className={className}>{children && children}</Card>
        </ShadowBox>
    );
};

export default ShadowCard;
