import * as React from 'react';
import * as styles from './index.css';
import { useIsInverseVariant } from '@utils/theme-variant-context';

const Divider: React.FC<{children?: void}> = () => {
    const isInverse = useIsInverseVariant();
    return <div className={styles.variants[isInverse ? 'inverse' : 'default']} />;
};

export default Divider;
