import * as React from 'react';
import {getAnimateDrawLineProps, getAnimateFadeInProps} from '../utils/animation';
import {useTheme} from '../hooks/hooks';
import {vars} from '../skins/skin-contract.css';
import * as styles from './icon-error.css';

const IconErrorDefault = (): JSX.Element => {
    const {platformOverrides} = useTheme();

    return (
        <svg width="72" height="64" viewBox="0 0 72 64">
            <g
                stroke={vars.colors.error}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            >
                <g className={styles.outerAnimation}>
                    <path
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        d="M 31.9 0.9 C 52.5 0.9 62.9 11.4 62.9 31.9 C 62.9 52.5 52.5 62.9 31.9 62.9 C 11.3 62.9 0.9 52.5 0.9 31.9 C 0.9 11.3 11.3 0.9 31.9 0.9 Z"
                        transform="rotate(90 32 32)"
                        {...getAnimateDrawLineProps('202', '0.3s', platformOverrides)}
                    />
                </g>
                <g className={styles.innerAnimation}>
                    <line
                        x1="31.9"
                        y1="20.9"
                        x2="31.9"
                        y2="36.9"
                        {...getAnimateDrawLineProps('17', '0.7s', platformOverrides)}
                    />
                    <circle
                        stroke={vars.colors.error}
                        fill={vars.colors.error}
                        strokeWidth="1"
                        cx="31.9"
                        cy="43.9"
                        r="1.5"
                        {...getAnimateFadeInProps('1s', platformOverrides)}
                    />
                </g>
            </g>
        </svg>
    );
};

const IconError = (): JSX.Element => {
    return <IconErrorDefault />;
};

export default IconError;
