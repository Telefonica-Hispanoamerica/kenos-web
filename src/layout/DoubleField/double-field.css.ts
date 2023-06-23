import {styleVariants} from '@vanilla-extract/css';
import * as mq from '@layout/MediaQueries/media-queries.css';
import {sprinkles} from '@utils/sprinkles.css';
import {DEFAULT_WIDTH} from '@components/Input/TextFields/TextFieldComponent/index.css';

const container = sprinkles({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
});

export const variants = styleVariants({
    default: [
        container,
        {
            '@media': {
                [mq.desktopOrBigger]: {
                    width: DEFAULT_WIDTH,
                },
            },
        },
    ],
    fullWidth: [
        container,
        {
            '@media': {
                [mq.desktopOrBigger]: {
                    width: '100%',
                },
            },
        },
    ],
});
