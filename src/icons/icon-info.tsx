import * as React from 'react';
import {vars} from '../skins/skin-contract.css';

const IconInfoDefault = (): JSX.Element => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64">
            <g fill={vars.colors.brand}>
                <path
                    fillRule="nonzero"
                    strokeWidth="0"
                    d="M31.991 0c21.24 0 32.01 10.77 32.01 32.01C64 53.235 53.23 64 31.99 64 10.763 64 .001 53.236.001 32.01 0 10.77 10.762 0 31.99 0zm0 2c-20.18 0-29.99 9.816-29.99 30.01C2 52.19 11.81 62 31.99 62c20.192 0 30.01-9.81 30.01-29.99C62 11.815 52.182 2 31.99 2zM32 27a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V28a1 1 0 0 1 1-1zm0-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                />
            </g>
        </svg>
    );
};

const IconInfo = (): JSX.Element => {
    return <IconInfoDefault />;
};

export default IconInfo;
