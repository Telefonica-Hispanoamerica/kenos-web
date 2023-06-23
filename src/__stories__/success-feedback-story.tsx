import * as React from 'react';
import {SuccessFeedback} from '@patterns/Feedback/feedback';
import {ButtonPrimary, ButtonSecondary} from '@components/Buttons/Button';
import Stack from '@layout/Stack/stack';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import {Placeholder} from '@components/Primitives/Placeholder';
import {useScreenSize} from '@hooks/hooks';

export default {
    title: 'Patterns/Feedback/SuccessFeedback',
    parameters: {
        fullScreen: true,
    },
    argTypes: {
        imageFit: {
            options: ['fit', 'fill'],
            control: {type: 'select'},
        },
    },
};

type SuccessArgs = {
    imageUrl: string | null;
    imageFit: 'fit' | 'fill';
    multipleParagraphs: boolean;
    withButtons: boolean;
};

const primaryButton = <ButtonPrimary onPress={() => {}}>Action1</ButtonPrimary>;

const secondaryButton = <ButtonSecondary onPress={() => {}}>Action2</ButtonSecondary>;

const defaultTitle = "I'm the title",
    defaultDescription = "I'm the description";

export const Success: StoryComponent<SuccessArgs> = ({
    imageUrl,
    imageFit,
    multipleParagraphs,
    withButtons,
}) => (
    <SuccessFeedback
        title={defaultTitle}
        description={
            multipleParagraphs ? [defaultDescription, 'paragraph 2', 'paragraph 3'] : defaultDescription
        }
        primaryButton={withButtons ? primaryButton : undefined}
        secondaryButton={withButtons ? secondaryButton : undefined}
        imageUrl={imageUrl ?? undefined}
        imageFit={imageFit}
    />
);
Success.storyName = 'SuccessFeedback';
Success.args = {
    imageUrl: 'https://i.imgur.com/k5tDSNx.png',
    imageFit: 'fit',
    multipleParagraphs: false,
    withButtons: true,
};

export const SuccessAsHeader: StoryComponent<SuccessArgs> = ({
    imageUrl,
    imageFit,
    multipleParagraphs,
    withButtons,
}) => {
    const {isTabletOrSmaller} = useScreenSize();
    const successFeedback = (
        <SuccessFeedback
            title={defaultTitle}
            description={
                multipleParagraphs ? [defaultDescription, 'paragraph 2', 'paragraph 3'] : defaultDescription
            }
            primaryButton={withButtons ? primaryButton : undefined}
            secondaryButton={withButtons ? secondaryButton : undefined}
            imageUrl={imageUrl ?? undefined}
            imageFit={imageFit}
        />
    );
    return (
        <Stack space={isTabletOrSmaller ? 24 : 40}>
            {isTabletOrSmaller ? successFeedback : <ResponsiveLayout>{successFeedback}</ResponsiveLayout>}
            <ResponsiveLayout>
                <Stack space={16}>
                    <Placeholder />
                    <Placeholder />
                </Stack>
            </ResponsiveLayout>
        </Stack>
    );
};
SuccessAsHeader.storyName = 'SuccessFeedback as Header';
SuccessAsHeader.args = {
    imageUrl: 'https://i.imgur.com/k5tDSNx.png',
    imageFit: 'fit',
    multipleParagraphs: false,
    withButtons: true,
};
