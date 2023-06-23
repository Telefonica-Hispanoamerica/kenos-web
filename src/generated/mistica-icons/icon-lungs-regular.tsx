/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconLungsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.143 8.1c.345.386 2.85 3.307 3.437 6.778.465 2.748.314 4.345-.495 5.18a1.96 1.96 0 01-1.346.552l-.063.002c-1.035 0-1.675-.544-2.029-.845l-.005-.004-.078-.067c-.297-.25-.379-.317-.718-.317h-.005c-.39 0-1.474-.09-1.644-.137-1.06-.277-1.645-1.12-1.645-2.372a148.53 148.53 0 01-.112-3.577l-1.454-.734-1.428.72a139.889 139.889 0 01-.112 3.56c0 1.238-.586 2.081-1.65 2.361-.162.045-1.238.137-1.647.135-.336 0-.417.067-.717.316l-.079.067-.005.005c-.354.3-.994.844-2.028.844-.042 0-.087 0-.132-.003a1.958 1.958 0 01-1.274-.549c-.81-.832-.964-2.428-.499-5.179.588-3.473 3.093-6.392 3.437-6.782.499-.756 1.193-1.123 2.12-1.123 1.454 0 1.99.832 2.18 1.367.087.168.162.37.24.642v.002c.065.225.107.608.135 1.09l.034-.017V4.332a.94.94 0 01.93-.947h1.014a.94.94 0 01.93.947v5.697l.033.017c.025-.468.07-.84.132-1.059.076-.266.154-.473.24-.644.194-.535.73-1.367 2.183-1.367.927 0 1.622.367 2.12 1.123zm-7.574 3.957l1.177-.594a.522.522 0 01.473 0l1.202.608c0-.285.003-.563.005-.832l-.762-.386a.545.545 0 01-.297-.488V4.472h-.739v5.88a.55.55 0 01-.297.487l-.768.386c.006.27.006.547.006.832zm9.64 7.117l.004-.005c.325-.333.62-1.319.149-4.078-.555-3.277-3.137-6.151-3.163-6.18a.973.973 0 01-.064-.083c-.272-.423-.594-.597-1.118-.597-.843 0-.974.395-1.03.566a.73.73 0 01-.045.103 2.36 2.36 0 00-.16.435c-.199.7-.143 4.372-.006 7.487.003.9.37 1.11.729 1.204.08.012.95.096 1.327.096h.009c.781 0 1.148.305 1.501.602l.09.076c.322.274.692.588 1.322.554.258-.01.423-.154.454-.18zM9.212 16.822c.14-3.157.196-6.83 0-7.532a2.284 2.284 0 00-.16-.432.615.615 0 01-.047-.109v-.002c-.057-.17-.188-.564-1.03-.564-.525 0-.85.174-1.118.597a.666.666 0 01-.065.084c-.028.03-2.608 2.905-3.162 6.182-.465 2.762-.171 3.745.157 4.084l.005.004c.03.026.194.165.448.175.638.034 1.002-.279 1.321-.553l.002-.001.09-.076c.352-.297.72-.602 1.498-.602h.008c.381 0 1.247-.084 1.367-.104.32-.084.686-.297.686-1.151z"
            />
        </svg>
    );
};

export default IconLungsRegular;
