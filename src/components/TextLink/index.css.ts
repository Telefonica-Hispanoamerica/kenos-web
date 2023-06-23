import * as mq from '@layout/MediaQueries/media-queries.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@skins/skin-contract.css';
import { sprinkles } from '@utils/sprinkles.css';

const base = style([
    sprinkles({
        width: 'auto',
        display: 'inline',
        cursor: 'pointer',
    }),
    {
        lineHeight: 'inherit',
        wordBreak: 'break-word',
        '@media': {
            [mq.supportsHover]: {
                selectors: {
                    '&:hover:not([disabled])': {
                        // important is needed to override styles in touchable.css.ts
                        textDecoration: 'underline !important',
                    },
                },
            },
        },
        selectors: {
            '&[disabled]': {
                opacity: 0.5,
                textDecoration: 'none !important',
            },
        },
    },
]);

export const variants = styleVariants({
    default: [
        base,
        sprinkles({
            color: vars.colors.textLink,
        }),
    ],
    inverseLight: [
        base,
        sprinkles({
            color: vars.colors.textLinkInverse,
        }),
        {
            textDecoration: 'underline !important',
            '@media': {
                [mq.supportsHover]: {
                    selectors: {
                        '&:hover:not([disabled])': {
                            textDecorationThickness: '2px !important',
                        },
                    },
                },
            },
        },
    ],
    inverseDark: [
        base,
        sprinkles({
            color: vars.colors.textLink,
        }),
        {
            '@media': {
                [mq.supportsHover]: {
                    selectors: {
                        '&:hover:not([disabled])': {
                            textDecorationThickness: 1,
                        },
                    },
                },
            },
        },
    ],
});
