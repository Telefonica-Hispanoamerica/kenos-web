import * as mq from '@layout/MediaQueries/media-queries.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@skins/skin-contract.css';
import { sprinkles } from '@utils/sprinkles.css';

export const shadow = style([
    sprinkles({
        padding: 8,
        borderRadius: '50%',
        background: 'transparent',
    }),
    {
        backgroundSize: '200%',
        margin: -8,
        transition: 'background-color 0.2s ease-in-out',

        '@media': {
            [mq.supportsHover]: {
                ':hover': {
                    background: vars.colors.backgroundAlternative,
                },
            },
        },
    },
]);
