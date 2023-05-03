import * as React from 'react';
import {TELEFONICA_SKIN, MOVISTAR_SKIN} from './constants';
import {getTelefonicaSkin} from './telefonica';
import {getMovistarSkin} from './movistar';

import type {SkinVariant, KnownSkin, KnownSkinName} from './types';

export const getSkinByName = (name: KnownSkinName, variant?: SkinVariant): KnownSkin => {
    switch (name) {
        case TELEFONICA_SKIN:
            return getTelefonicaSkin(variant);
        case MOVISTAR_SKIN:
            return getMovistarSkin(variant);
        default: {
            const n: never = name;
            throw Error('Unknown skin name: ' + n);
        }
    }
};

// copied/adapted from https://github.com/gregberge/react-flatten-children/blob/master/src/index.tsx
export const flattenChildren = (children: React.ReactNode): Array<React.ReactNode> => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.reduce((flatChildren: Array<React.ReactNode>, child) => {
        if ((child as React.ReactElement<any>).type === React.Fragment) {
            return flatChildren.concat(flattenChildren((child as React.ReactElement<any>).props.children));
        }
        flatChildren.push(child);
        return flatChildren;
    }, []);
};
