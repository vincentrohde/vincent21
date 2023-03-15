import React, {ComponentProps} from 'react';

interface Props extends ComponentProps<any> {
    stroke?: string;
}

const Arrow = ({stroke = '#000'}: Props) => {
    return (
        <svg
            className={'Arrow'}
            width={7.662}
            height={12.496}
            viewBox="0 0 7.662 12.496"
            fill="none"
        >
            {stroke.length ? (
                <path
                    d="M.707.707l5.541 5.541-5.541 5.541"
                    stroke={stroke}
                    strokeMiterlimit={10}
                    strokeWidth={2}
                />
            ) : (
                <path d="M.707.707l5.541 5.541-5.541 5.541" strokeMiterlimit={10} strokeWidth={2} />
            )}
        </svg>
    );
};

export default Arrow;
