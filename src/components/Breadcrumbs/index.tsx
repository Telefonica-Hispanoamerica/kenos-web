/**
 * Figma: https://www.figma.com/file/BctaFHf0PVPX2uwRSl8taf/Breadcrumbs?node-id=2%3A61
 * Accessibility: https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html
 */
import * as React from 'react';
import * as styles from './index.css';
import { vars } from '@skins/skin-contract.css';
import { Text1 } from '@components/Text';
import TextLink  from '@components/TextLink/';
import { getPrefixedDataAttributes } from '@utils/dom';
import type { DataAttributes } from '@utils/types';
import { useIsInverseVariant } from '@utils/theme-variant-context';

const BREADCRUMB_SEPARATOR = ' / ';

export type NavigationBreadcrumbsProps = {
    title: string;
    breadcrumbs: ReadonlyArray<{
        readonly title: string;
        readonly url: string;
    }>;
    children?: void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
};

const NavigationBreadcrumbs: React.FC<NavigationBreadcrumbsProps> = ({
    title,
    breadcrumbs,
    dataAttributes,
    'aria-label': ariaLabel = 'Breadcrumb',
}) => {
    const isInverse = useIsInverseVariant();
    return (
        <nav aria-label={ariaLabel} {...getPrefixedDataAttributes(dataAttributes, 'NavigationBreadcrumbs')}>
            <ol className={styles.list}>
                {breadcrumbs.map(({title, url}, index) => (
                    <li key={index} className={styles.listItem}>
                        <Text1 regular>
                            <TextLink
                                to={url}
                                style={{
                                    color: isInverse
                                        ? vars.colors.textPrimaryInverse
                                        : vars.colors.textPrimary,
                                }}
                                className={styles.link}
                            >
                                {title}
                            </TextLink>
                        </Text1>
                        <span role="presentation">
                            <Text1 regular>{BREADCRUMB_SEPARATOR}</Text1>
                        </span>
                    </li>
                ))}
                <li className={styles.listItem}>
                    {/* this anchor is added for accessibility, it is disabled */}
                    <a
                        aria-current="page"
                        href="#"
                        className={styles.current}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <Text1
                            regular
                            color={isInverse ? vars.colors.textSecondaryInverse : vars.colors.textSecondary}
                        >
                            {title}
                        </Text1>
                    </a>
                </li>
            </ol>
        </nav>
    );
};

export default NavigationBreadcrumbs;
