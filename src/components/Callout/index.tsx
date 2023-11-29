import * as React from 'react';
import * as styles from './index.css';
import classNames from 'classnames';
import Box from '@layout/Box/box';
import Stack from '@layout/Stack/stack';
import Inline from '@layout/Inline/inline';
import {useTheme} from '@hooks/hooks';
import {vars} from '@skins/skin-contract.css';
import {Text2, Text3} from '@components/Text';
import IconButton from '@components/Buttons/IconButton';
import ButtonGroup from '@components/Buttons/ButtonGroup';
import {ButtonLink, ButtonPrimary, ButtonSecondary} from '@components/Buttons/Button';
import IconCloseRegular from '../../generated/kenos-icons/icon-close-regular';
import {sprinkles} from '@utils/sprinkles.css';
import {getPrefixedDataAttributes} from '@utils/dom';
import type {DataAttributes, RendersNullableElement} from '@utils/types';
import {ThemeVariant, useIsInverseVariant} from '@utils/theme-variant-context';

type Props = {
    title?: string;
    description: string;
    onClose?: () => void;
    icon?: React.ReactElement;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    children?: void;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
};

const Callout: React.FC<Props> = ({
    title,
    description,
    icon,
    onClose,
    button,
    secondaryButton,
    buttonLink,
    'aria-label': ariaLabel,
    dataAttributes,
}) => {
    const isInverse = useIsInverseVariant();
    const {texts} = useTheme();
    return (
        <section
            className={classNames(
                styles.container,
                sprinkles({
                    background: isInverse
                        ? vars.colors.backgroundContainer
                        : vars.colors.backgroundAlternative,
                })
            )}
            aria-label={ariaLabel ?? title}
            {...getPrefixedDataAttributes(dataAttributes, 'Callout')}
        >
            <ThemeVariant isInverse={false}>
                {icon && <Box paddingRight={16}>{icon}</Box>}
                <div className={styles.content}>
                    <Stack space={16}>
                        <Inline fullWidth alignItems="flex-start" space="between">
                            <Stack space={4}>
                                <Text3 as="h2" regular>
                                    {title}
                                </Text3>
                                <Text2 as="p" regular color={vars.colors.textSecondary}>
                                    {description}
                                </Text2>
                            </Stack>
                            {onClose && (
                                <IconButton
                                    size={40}
                                    style={{
                                        display: 'flex',
                                        margin: '-8px -12px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onPress={onClose}
                                    aria-label={texts.closeButtonLabel}
                                >
                                    <IconCloseRegular size={24} color={vars.colors.neutralHigh} />
                                </IconButton>
                            )}
                        </Inline>
                        {(button || secondaryButton || buttonLink) && (
                            <ButtonGroup
                                primaryButton={button}
                                secondaryButton={secondaryButton}
                                link={buttonLink}
                            />
                        )}
                    </Stack>
                </div>
            </ThemeVariant>
        </section>
    );
};

export default Callout;
