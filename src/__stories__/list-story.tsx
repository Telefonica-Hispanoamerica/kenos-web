import * as React from 'react';
import {
    Circle,
    Row,
    BoxedRow,
    RowList,
    BoxedRowList,
    RadioGroup,
    skinVars,
    Placeholder,
    Tag,
    IconLightningRegular,
    Text2,
    Text3,
    Inline,
} from '..';

export default {
    title: 'Components/Lists',
    argTypes: {
        control: {
            options: [
                'chevron',
                'navigates without chevron',
                'switch',
                'switch and onPress',
                'checkbox',
                'checkbox and onPress',
                'radio',
                'custom element',
                'custom element with text',
                'action with custom element',
                'none',
            ],
            control: {type: 'select'},
        },
    },
};

import {useAriaId} from '@hooks/hooks';

type Args = {
    headline: string;
    title: string;
    subtitle: string;
    description: string;
    control: string;
    withBadge: boolean;
    oneLineTitle: boolean;
    oneLineSubtitle: boolean;
    oneLineDescription: boolean;
    extraContent: boolean;
    disabled: boolean;
};

const defaultArgs = {
    headline: 'Tag label',
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    control: 'radio',
    withBadge: false,
    oneLineTitle: false,
    oneLineSubtitle: false,
    oneLineDescription: false,
    extraContent: false,
    disabled: false,
};

export const RowListStory: StoryComponent<Args> = (args) => <Template {...args} />;
RowListStory.storyName = 'Row list';
RowListStory.args = defaultArgs;

export const BoxedRowListStory: StoryComponent<Args> = (args) => <Template boxed {...args} />;
BoxedRowListStory.storyName = 'Boxed row list';
BoxedRowListStory.args = defaultArgs;

const Template: StoryComponent<Args & {boxed?: boolean}> = ({
    boxed,
    headline,
    title,
    subtitle,
    description,
    control,
    withBadge,
    oneLineTitle,
    oneLineSubtitle,
    oneLineDescription,
    extraContent,
    disabled,
}) => {
    const extra = extraContent ? <Placeholder height={56} /> : undefined;

    const getControlProps = (index: number) => {
        let controlProps: any = {};
        const onPress = () => alert('Pressed');
        switch (control) {
            case 'chevron':
                controlProps = {href: 'https://example.org', newTab: true};
                break;
            case 'navigates without chevron':
                controlProps = {href: 'https://example.org', newTab: true, right: null}; // right null removes the chevron
                break;
            case 'switch':
                controlProps = {switch: {defaultValue: true, onChange: () => {}}};
                break;
            case 'switch and onPress':
                controlProps = {
                    switch: {defaultValue: true, onChange: () => {}},
                    onPress,
                };
                break;
            case 'checkbox':
                controlProps = {checkbox: {defaultValue: true, onChange: () => {}}};
                break;
            case 'checkbox and onPress':
                controlProps = {
                    checkbox: {defaultValue: true, onChange: () => {}},
                    onPress,
                };
                break;
            case 'custom element':
                controlProps = {
                    right: (
                        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                            <div style={{width: 32, height: 32, borderRadius: '50%', background: 'pink'}} />
                        </div>
                    ),
                };
                break;
            case 'custom element with text':
                controlProps = {
                    onPress,
                    right: ({centerY}: {centerY: boolean}) => (
                        <div style={centerY ? {display: 'flex', alignItems: 'center', height: '100%'} : {}}>
                            <Inline space={0}>
                                <Text3 color={skinVars.colors.error} medium as="p">
                                    12,00 €
                                </Text3>
                            </Inline>
                        </div>
                    ),
                };
                break;
            case 'action with custom element':
                controlProps = {
                    onPress,
                    right: () => (
                        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                            <div style={{width: 32, height: 32, borderRadius: '50%', background: 'pink'}} />
                        </div>
                    ),
                };
                break;
            case 'radio':
                controlProps = {radioValue: 'radio-value-' + index};
                break;
            case 'none':
            default:
                controlProps = {};
        }
        return controlProps;
    };

    const ListComponent = boxed ? BoxedRowList : RowList;
    const RowComponent = boxed ? BoxedRow : Row;

    let row = 1;
    const list = boxed ? (
        <ListComponent dataAttributes={{testid: 'list'}}>
            <RowComponent
                asset={<IconLightningRegular size={24} />}
                headline={headline && <Tag type="promo_1">{headline}</Tag>}
                title={title}
                subtitle={subtitle}
                description={description}
                badge={withBadge ? 2 : undefined}
                titleLinesMax={oneLineTitle ? 1 : 2}
                subtitleLinesMax={oneLineSubtitle ? 1 : 2}
                descriptionLinesMax={oneLineDescription ? 1 : 2}
                extra={extra}
                disabled={disabled}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular color={skinVars.colors.brand} size={24} />}
                headline={headline && <Tag type="promo_1">{headline}</Tag>}
                title={title}
                subtitle={subtitle}
                description={description}
                badge={withBadge ? 2 : undefined}
                titleLinesMax={oneLineTitle ? 1 : 2}
                subtitleLinesMax={oneLineSubtitle ? 1 : 2}
                descriptionLinesMax={oneLineDescription ? 1 : 2}
                extra={extra}
                disabled={disabled}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={
                    <Circle size={40} backgroundColor={skinVars.colors.backgroundBrand}>
                        <IconLightningRegular color={skinVars.colors.background} size={24} />
                    </Circle>
                }
                headline={headline && <Tag type="promo_1_high">{headline}</Tag>}
                title={
                    <Text3
                        regular
                        color={skinVars.colors.inverse}
                        truncate={oneLineTitle ? 1 : 2}
                        id={useAriaId()}
                    >
                        {title}
                    </Text3>
                }
                subtitle={
                    <Text2 regular color={skinVars.colors.inverse} truncate={oneLineSubtitle ? 1 : 2}>
                        {subtitle}
                    </Text2>
                }
                description={
                    <Text2 regular color={skinVars.colors.inverse} truncate={oneLineDescription ? 1 : 2}>
                        {description}
                    </Text2>
                }
                badge={withBadge ? 2 : undefined}
                titleLinesMax={oneLineTitle ? 1 : 2}
                subtitleLinesMax={oneLineSubtitle ? 1 : 2}
                descriptionLinesMax={oneLineDescription ? 1 : 2}
                extra={extra}
                disabled={disabled}
                background={skinVars.colors.backgroundBrandSecondary}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular size={24} />}
                title={title}
                badge={withBadge ? 2 : undefined}
                extra={extra}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular color={skinVars.colors.brand} size={24} />}
                title={title}
                badge={withBadge ? 2 : undefined}
                extra={extra}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={
                    <Circle size={40} backgroundColor={skinVars.colors.backgroundBrand}>
                        <IconLightningRegular color={skinVars.colors.background} size={24} />
                    </Circle>
                }
                title={title}
                badge={withBadge ? 2 : undefined}
                background={skinVars.colors.backgroundBrandSecondary}
                isInverse={true}
                extra={extra}
                {...getControlProps(row++)}
            />
        </ListComponent>
    ) : (
        <ListComponent dataAttributes={{testid: 'list'}}>
            <RowComponent
                asset={<IconLightningRegular size={24} />}
                headline={headline && <Tag type="promo_1">{headline}</Tag>}
                title={title}
                subtitle={subtitle}
                description={description}
                badge={withBadge ? 2 : undefined}
                titleLinesMax={oneLineTitle ? 1 : 2}
                subtitleLinesMax={oneLineSubtitle ? 1 : 2}
                descriptionLinesMax={oneLineDescription ? 1 : 2}
                extra={extra}
                disabled={disabled}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular color={skinVars.colors.brand} size={24} />}
                headline={headline && <Tag type="promo_1">{headline}</Tag>}
                title={title}
                subtitle={subtitle}
                description={description}
                badge={withBadge ? 2 : undefined}
                titleLinesMax={oneLineTitle ? 1 : 2}
                subtitleLinesMax={oneLineSubtitle ? 1 : 2}
                descriptionLinesMax={oneLineDescription ? 1 : 2}
                extra={extra}
                disabled={disabled}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular size={24} />}
                title={title}
                badge={withBadge ? 2 : undefined}
                extra={extra}
                {...getControlProps(row++)}
            />
            <RowComponent
                asset={<IconLightningRegular color={skinVars.colors.brand} size={24} />}
                title={title}
                badge={withBadge ? 2 : undefined}
                extra={extra}
                {...getControlProps(row++)}
            />
        </ListComponent>
    );

    return control === 'radio' ? (
        <RadioGroup disabled={disabled} name="radio-group" defaultValue="apple" data-testid="radio-row-list">
            {list}
        </RadioGroup>
    ) : (
        list
    );
};
