import * as React from 'react';
import Stack from '@layout/Stack/stack';
import ThemeContextProvider from '@utils/theme-context-provider';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import {Title1} from '@components/Title';
import {Select} from '@components/Select';
import {getMovistarSkin} from '@skins/movistar';

const fruitOptions = [
    {text: 'Orange', value: 'orange'},
    {text: 'Apple', value: 'apple'},
    {text: 'Banana', value: 'banana'},
    {text: 'Pear', value: 'pear'},
    {text: 'Lemon', value: 'lemon'},
    {text: 'Pineapple', value: 'pineapple'},
    {text: 'Strawberry', value: 'strawberry'},
    {text: 'Watermelon', value: 'watermelon'},
];

const SelectTest = (): JSX.Element => {
    return (
        <ThemeContextProvider
            theme={{
                skin: getMovistarSkin(),
                i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
                platformOverrides: undefined,
            }}
        >
            <ResponsiveLayout>
                <Stack space={24}>
                    <Title1>Select</Title1>
                    <Select
                        name="normal"
                        helperText="Normal select"
                        options={fruitOptions}
                        label="Select a fruit"
                        optional
                    />
                </Stack>
            </ResponsiveLayout>
        </ThemeContextProvider>
    );
};

export default SelectTest;
