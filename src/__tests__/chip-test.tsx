import * as React from 'react';
import {render, screen} from '@testing-library/react';
import Chip from '@components/Chip/chip';
import userEvent from '@testing-library/user-event';
import ThemeContextProvider from '@utils/theme-context-provider';
import {makeTheme} from './test-utils';

test('Chip can be closed', async () => {
    const closeSpy = jest.fn();
    render(
        <ThemeContextProvider theme={makeTheme()}>
            <Chip onClose={closeSpy}>some text</Chip>
        </ThemeContextProvider>
    );

    const closeButton = screen.getByRole('button', {name: 'Cerrar'});

    await userEvent.click(closeButton);

    expect(closeSpy).toHaveBeenCalledTimes(1);
});
