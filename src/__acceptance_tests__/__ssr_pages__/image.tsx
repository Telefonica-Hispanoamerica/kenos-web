import * as React from 'react';
import Stack from '@layout/Stack/stack';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import {Title1} from '@components/Title';
import {Image} from '@components/Primitives';

const ImageTest = (): JSX.Element => (
    <ResponsiveLayout>
        <Stack space={48}>
            <Title1>Image aspectRatio: 16:9</Title1>
            <Image
                src="https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                aspectRatio="16:9"
                width={200}
            />
        </Stack>
    </ResponsiveLayout>
);

export default ImageTest;
