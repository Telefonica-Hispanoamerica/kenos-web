import * as React from 'react';
import {
    Stack,
    Tag,
    skinVars,
    Text3,
    IconStarFilled,
    IconTimeFilled,
    IconOfferPercentFilled,
    IconCheckRegular,
    IconCloseRegular,
    IconAlertRegular,
    Inline,
} from '..';
import {ThemeVariant} from '@utils/theme-variant-context';

const defaultArgs = {
    label: 'Example',
    icon: false,
};

type Args = {
    label: string;
    icon: boolean;
};

export default {
    title: 'Components/Tag',
};

const Container = ({children, inverse = false}: {inverse?: boolean; children: React.ReactNode}) => {
    return (
        <ThemeVariant isInverse={inverse}>
            <div
                style={{
                    padding: 16,
                    width: 175,
                    background: inverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
                }}
            >
                <Stack space={16}>{children}</Stack>
            </div>
        </ThemeVariant>
    );
};

export const Default: StoryComponent<Args> = ({label: labelFromArgs, icon}) => {
    const getLabel = (fallback: string) => labelFromArgs || fallback;

    return (
        <Inline space={48} dataAttributes={{testid: 'tags'}}>
            <Container>
                <Text3 medium>{!icon ? 'No icon' : 'Icon'} light</Text3>
                <Tag type="active" Icon={icon ? IconStarFilled : undefined}>
                    {getLabel('Active')}
                </Tag>
                <Tag type="promo_1" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 1')}
                </Tag>
                <Tag type="promo_2" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 2')}
                </Tag>
                <Tag type="inactive" Icon={icon ? IconTimeFilled : undefined}>
                    {getLabel('Inactive')}
                </Tag>
                <Tag type="success" Icon={icon ? IconCheckRegular : undefined}>
                    {getLabel('Success')}
                </Tag>
                <Tag type="warning" Icon={icon ? IconAlertRegular : undefined}>
                    {getLabel('Warning')}
                </Tag>
                <Tag type="error" Icon={icon ? IconCloseRegular : undefined}>
                    {getLabel('Error')}
                </Tag>
            </Container>

            <Container>
                <Text3 medium>{!icon ? 'No icon' : 'Icon'} regular</Text3>
                <Tag type="active_high" Icon={icon ? IconStarFilled : undefined}>
                    {getLabel('Active')}
                </Tag>
                <Tag type="promo_1_high" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 1')}
                </Tag>
                <Tag type="promo_2_high" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 2')}
                </Tag>
                <Tag type="inactive_high" Icon={icon ? IconTimeFilled : undefined}>
                    {getLabel('Inactive')}
                </Tag>
                <Tag type="success_high" Icon={icon ? IconCheckRegular : undefined}>
                    {getLabel('Success')}
                </Tag>
                <Tag type="warning_high" Icon={icon ? IconAlertRegular : undefined}>
                    {getLabel('Warning')}
                </Tag>
                <Tag type="error_high" Icon={icon ? IconCloseRegular : undefined}>
                    {getLabel('Error')}
                </Tag>
            </Container>

            <Container>
                <Text3 medium>{!icon ? 'No icon' : 'Icon'} bg white</Text3>
                <Tag type="active_white" Icon={icon ? IconStarFilled : undefined}>
                    {getLabel('Active')}
                </Tag>
                <Tag type="promo_1_white" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 1')}
                </Tag>
                <Tag type="promo_2_white" Icon={icon ? IconOfferPercentFilled : undefined}>
                    {getLabel('Promo 2')}
                </Tag>
                <Tag type="inactive_white" Icon={icon ? IconTimeFilled : undefined}>
                    {getLabel('Inactive')}
                </Tag>
                <Tag type="success_white" Icon={icon ? IconCheckRegular : undefined}>
                    {getLabel('Success')}
                </Tag>
                <Tag type="warning_white" Icon={icon ? IconAlertRegular : undefined}>
                    {getLabel('Warning')}
                </Tag>
                <Tag type="error_white" Icon={icon ? IconCloseRegular : undefined}>
                    {getLabel('Error')}
                </Tag>
            </Container>
        </Inline>
    );
};

Default.storyName = 'Tag';
Default.args = defaultArgs;
