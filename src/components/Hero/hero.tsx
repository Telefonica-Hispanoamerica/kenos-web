import * as React from 'react';
import * as styles from './hero.css';
import classnames from 'classnames';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useScreenSize } from '@hooks/hooks';
import { vars } from '@skins/skin-contract.css';
import Box from '@layout/Box/box';
import Stack from '@layout/Stack/stack';
import GridLayout from '@layout/GridLayout/grid-layout';
import { Tag } from '@components/Tag';
import { Video } from '@components/Primitives';
import { Text3, Text8 } from '@components/Text';
import ButtonGroup from '@components/Buttons/ButtonGroup/button-group';
import { useIsInsideSlideshowContext } from '@components/Carousels/carousel';
import { ButtonLink, ButtonPrimary, ButtonSecondary } from '@components/Buttons';
import Image, { MediaBorderRadiusProvider } from '@components/Primitives/Image/image';
import { sprinkles } from '@utils/sprinkles.css';
import { getPrefixedDataAttributes } from '@utils/dom';
import { ThemeVariant } from '@utils/theme-variant-context';
import type { DataAttributes, RendersElement, RendersNullableElement } from '@utils/types';

type LayoutProps = {children: React.ReactNode; isInverse: boolean};

// This is a duplication of the ResponsiveLayout, needed because original ResponsiveLayout has a inner div that we cannot control and the height is missing there.
// We need to control this height to fix the actions at the bottom of the Hero component when we are inside a Slidehow with differents Hero heights.
const Layout = ({children, isInverse}: LayoutProps) => {
    return (
        <ThemeVariant isInverse={isInverse}>
            <div className={styles.layout}>{children}</div>
        </ThemeVariant>
    );
};

type HeroContentProps = {
    headline?: RendersNullableElement<typeof Tag>;
    pretitle?: string;
    title?: string;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
};

const HeroContent = ({
    headline,
    title,
    pretitle,
    description,
    descriptionLinesMax,
    extra,
    button,
    secondaryButton,
    buttonLink,
}: HeroContentProps) => {
    return (
        <section
            className={sprinkles({
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
            })}
        >
            <div>
                <Stack space={16}>
                    {headline && headline}
                    <Stack space={8}>
                        {pretitle && (
                            <Text3 as="p" regular>
                                {pretitle}
                            </Text3>
                        )}
                        {title && <Text8 as="h1">{title}</Text8>}
                    </Stack>
                    {description && (
                        <Text3
                            as="p"
                            regular
                            color={vars.colors.textSecondary}
                            truncate={descriptionLinesMax}
                        >
                            {description}
                        </Text3>
                    )}
                </Stack>
                {extra && <div>{extra}</div>}
            </div>
            {(button || buttonLink) && (
                <div className={styles.actions}>
                    <ButtonGroup primaryButton={button} secondaryButton={secondaryButton} link={buttonLink} />
                </div>
            )}
        </section>
    );
};

type HeroProps = {
    height?: string;
    background?: 'default' | 'alternative' | 'brand' | 'brand-secondary';
    media: RendersElement<typeof Image> | RendersElement<typeof Video>;
    headline?: RendersNullableElement<typeof Tag>;
    pretitle?: string;
    title?: string;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    dataAttributes?: DataAttributes;
    desktopMediaPosition?: 'left' | 'right';
};

const BACKGROUND_COLOR = {
    default: vars.colors.background,
    alternative: vars.colors.backgroundAlternative,
    brand: vars.colors.backgroundBrand,
    'brand-secondary': vars.colors.backgroundBrandSecondary,
};

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
    (
        {height, background = 'default', media, desktopMediaPosition = 'left', dataAttributes, ...rest},
        ref
    ) => {
        const {isTabletOrSmaller} = useScreenSize();
        const isInsideSlideShow = useIsInsideSlideshowContext();
        const isInverse = background === 'brand' || background === 'brand-secondary';

        if (isTabletOrSmaller) {
            return (
                <MediaBorderRadiusProvider value={false}>
                    <div
                        {...getPrefixedDataAttributes({'component-name': 'Hero', ...dataAttributes})}
                        ref={ref}
                        style={{
                            backgroundColor: BACKGROUND_COLOR[background],
                            ...(height === '100vh' ? {maxHeight: '-webkit-fill-available'} : {}), // Hack to avoid issues in Safari with 100vh
                            ...assignInlineVars({
                                [styles.vars.height]: height ?? '100%',
                            }),
                        }}
                        className={classnames(styles.container, styles.containerMobile)}
                    >
                        {media}
                        <Layout isInverse={isInverse}>
                            <Box paddingTop={24} paddingBottom={isInsideSlideShow ? 48 : 24}>
                                <HeroContent {...rest} />
                            </Box>
                        </Layout>
                    </div>
                </MediaBorderRadiusProvider>
            );
        }

        const left =
            desktopMediaPosition === 'left' ? (
                media
            ) : (
                <Box paddingRight={24}>
                    <HeroContent {...rest} />
                </Box>
            );

        const right =
            desktopMediaPosition === 'right' ? (
                media
            ) : (
                <Box paddingLeft={24}>
                    <HeroContent {...rest} />
                </Box>
            );

        return (
            <MediaBorderRadiusProvider value>
                <div
                    {...getPrefixedDataAttributes({'component-name': 'Hero', ...dataAttributes})}
                    ref={ref}
                    style={{
                        backgroundColor: BACKGROUND_COLOR[background],
                        ...(height === '100vh' ? {maxHeight: '-webkit-fill-available'} : {}), // Hack to avoid issues in Safari with 100vh
                        ...assignInlineVars({
                            [styles.vars.height]: height ?? '100%',
                        }),
                    }}
                    className={sprinkles({height: '100%', display: 'flex', alignItems: 'center'})}
                >
                    <Layout isInverse={isInverse}>
                        <GridLayout
                            template="6+6"
                            left={
                                <Box
                                    paddingY={56}
                                    className={classnames(styles.container, styles.containerDesktop)}
                                >
                                    {left}
                                </Box>
                            }
                            right={
                                <Box
                                    paddingY={56}
                                    className={classnames(styles.container, styles.containerDesktop)}
                                >
                                    {right}
                                </Box>
                            }
                        />
                    </Layout>
                </div>
            </MediaBorderRadiusProvider>
        );
    }
);

export default Hero;
