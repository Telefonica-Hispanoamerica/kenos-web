import { style } from '@vanilla-extract/css';
import { sprinkles } from '@utils/sprinkles.css';

export const circle = style([
    sprinkles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    }),
    {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
]);
