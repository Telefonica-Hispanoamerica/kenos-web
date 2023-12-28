import * as React from 'react';
import {StorySection} from './helpers';
import {
    Box,
    ButtonDanger,
    ButtonLink,
    ButtonPrimary,
    ButtonSecondary,
    TextField,
    Stack,
    ThemeVariant,
    skinVars,
    Checkbox,
    Text2,
    IconPhotoCameraRegular,
    ResponsiveLayout,
} from '..';

export default {
    title: 'Components/Buttons',
};

const defaultArgs = {
    text: 'Example',
    loadingText: '',
    icon: false,
    iconPosition: 'none',
    inverse: false,
    small: false,
    disabled: false,
    showSpinner: false,
    rounded: false,
    newTab: false,
    action: 'href',
};

const defaultArgTypes = {
    icon: {
        control: {type: 'boolean'},
    },
    iconPosition: {
        if: {arg: 'icon'},
        options: ['none', 'left', 'right'],
        control: {type: 'select'},
    },
    action: {
        options: ['onPress', 'href', 'to'],
        control: {type: 'select'},
    },
    newTab: {if: {arg: 'action', eq: 'href'}},
};

type Args = {
    text: string;
    loadingText: string;
    inverse: boolean;
    disabled: boolean;
    showSpinner: boolean;
    small: boolean;
    rounded: boolean;
    action: string;
    newTab: boolean;
    icon: boolean;
    iconPosition: string;
};

const getButtonActionProps = (action: string, newTab: boolean) => {
    return action === 'onPress'
        ? {
              onPress: () => {
                  window.alert('pressed!');
              },
          }
        : action === 'href'
        ? {
              href: 'https://www.google.com',
              newTab,
          }
        : {
              to: '#',
          };
};

type Props = {
    inverse: boolean;
    children: React.ReactNode;
};

const ButtonBackgroundContainer: React.FC<Props> = ({inverse, children}) => (
    <ResponsiveLayout fullWidth dataAttributes={{testid: 'content'}} isInverse={inverse}>
        <Box padding={16}>{children}</Box>
    </ResponsiveLayout>
);

const BackgroundTheme: StoryComponent = ({children}) => {
    const [isInverse, setIsInverse] = React.useState(false);
    return (
        <ThemeVariant isInverse={isInverse}>
            <>
                <div
                    style={{
                        background: isInverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
                    }}
                >
                    <Box padding={8}>
                        <Checkbox name="inverse" checked={isInverse} onChange={setIsInverse}>
                            Inverse variant
                        </Checkbox>
                    </Box>

                    {children}
                </div>
            </>
        </ThemeVariant>
    );
};

export const buttonPrimary: StoryComponent<Args> = ({
    inverse,
    text,
    action,
    icon,
    iconPosition,
    newTab,
    ...props
}) => {
    return (
        <ButtonBackgroundContainer inverse={inverse}>
            <ButtonPrimary
                {...getButtonActionProps(action, newTab)}
                {...props}
                icon={icon ? IconPhotoCameraRegular : undefined}
                iconPosition={iconPosition === 'left' || iconPosition === 'right' ? iconPosition : 'none'}
            >
                {text}
            </ButtonPrimary>
        </ButtonBackgroundContainer>
    );
};
export const buttonSecondary: StoryComponent<Args> = ({
    inverse,
    text,
    action,
    icon,
    iconPosition,
    newTab,
    ...props
}) => {
    return (
        <ButtonBackgroundContainer inverse={inverse}>
            <ButtonSecondary
                {...getButtonActionProps(action, newTab)}
                {...props}
                icon={icon ? IconPhotoCameraRegular : undefined}
                iconPosition={iconPosition === 'left' || iconPosition === 'right' ? iconPosition : 'none'}
            >
                {text}
            </ButtonSecondary>
        </ButtonBackgroundContainer>
    );
};
export const buttonDanger: StoryComponent<Args> = ({
    inverse,
    text,
    action,
    icon,
    iconPosition,
    newTab,
    ...props
}) => {
    return (
        <ButtonBackgroundContainer inverse={inverse}>
            <ButtonDanger
                {...getButtonActionProps(action, newTab)}
                {...props}
                icon={icon ? IconPhotoCameraRegular : undefined}
                iconPosition={iconPosition === 'left' || iconPosition === 'right' ? iconPosition : 'none'}
            >
                {text}
            </ButtonDanger>
        </ButtonBackgroundContainer>
    );
};
export const buttonLink: StoryComponent<Omit<Args, 'small'>> = ({
    inverse,
    text,
    icon,
    iconPosition,
    action,
    newTab,
    ...props
}) => {
    return (
        <ButtonBackgroundContainer inverse={inverse}>
            <ButtonLink
                {...getButtonActionProps(action, newTab)}
                {...props}
                icon={icon ? IconPhotoCameraRegular : undefined}
                iconPosition={iconPosition === 'left' || iconPosition === 'right' ? iconPosition : 'none'}
            >
                {text}
            </ButtonLink>
        </ButtonBackgroundContainer>
    );
};

export const SubmitButton: StoryComponent = () => (
    <StorySection title="Submitbutton">
        <Text2 as="p" regular>
            A button with submit attribute in a form doesn't need a onPress prop. And clicking on it will fire
            onSubmit event, that should be handled by the form.
        </Text2>
        <form onSubmit={() => window.alert('form submitted')}>
            <Box paddingY={16}>
                <Stack space={16}>
                    <TextField name="name" label="name" />
                    <ButtonPrimary submit>Submit</ButtonPrimary>
                </Stack>
            </Box>
        </form>
    </StorySection>
);

buttonPrimary.storyName = 'Button Primary';
buttonSecondary.storyName = 'Button Secondary';
buttonDanger.storyName = 'Button Danger';
buttonLink.storyName = 'Button Link';
SubmitButton.storyName = 'Submit button';

buttonPrimary.args = defaultArgs;
buttonSecondary.args = defaultArgs;
buttonDanger.args = defaultArgs;
buttonLink.args = {
    ...(({small, ...o}) => o)(defaultArgs),
};

buttonPrimary.argTypes = defaultArgTypes;
buttonSecondary.argTypes = defaultArgTypes;
buttonDanger.argTypes = defaultArgTypes;
buttonLink.argTypes = {
    ...defaultArgTypes,
};
