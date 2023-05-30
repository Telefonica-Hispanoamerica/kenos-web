import * as React from 'react';
import Popover from '@components/Popover';

const PopoverTest = (): JSX.Element => (
    <Popover
        target="some target, this can be any component"
        description="Some description to be shown inside the Popover"
    />
);

export default PopoverTest;
