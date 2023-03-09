import * as React from 'react';
import {skinVars} from '../../src';

type Props = {
    size?: number;
    color?: string;
};

const IconSun: React.FC<Props> = ({size = 24, color}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24">
            <g fill={color || skinVars.colors.neutralHigh} opacity="0.5">
                <path d="M13.1259 1.66689C12.5806 2.30124 12.0587 3.24961 11.9413 4.24588C11.9253 4.38168 11.9169 4.51838 11.9169 4.65529C11.9169 4.82048 11.9471 4.98567 11.9622 5.04573C12.0113 5.05549 12.0731 5.06524 12.1436 5.07088C12.1816 5.07392 12.2221 5.07577 12.2645 5.07577C12.7496 5.07577 13.2955 4.91949 13.8134 4.65529C13.8465 4.63842 13.8795 4.62111 13.9123 4.60337L13.918 4.6003C14.426 4.3249 14.9008 3.94722 15.2569 3.51399C15.3007 3.46078 15.3438 3.40638 15.386 3.35086C15.6786 2.96617 15.931 2.52789 16.115 2.05872C16.2758 1.64836 16.3843 1.21438 16.4215 0.771984C16.4309 0.660276 16.4358 0.548031 16.4358 0.435495C16.4358 0.285324 16.4206 0.120137 16.3904 0C15.9175 0.0190513 15.404 0.153578 14.9082 0.372917C14.8627 0.393068 14.8173 0.413936 14.7721 0.435495C14.6557 0.49103 14.5405 0.55116 14.4275 0.615474C13.9324 0.89707 13.4769 1.25891 13.1259 1.66689Z" />
                <path d="M8.54658 5.37611C9.08681 5.37611 9.59214 5.50458 10.0611 5.66684C10.3018 5.75015 10.533 5.84237 10.7544 5.93068C11.1003 6.06865 11.4223 6.1971 11.7195 6.2671C11.867 6.30183 12.0083 6.32218 12.1436 6.32218C12.1829 6.32218 12.2232 6.32016 12.2645 6.31629C12.6101 6.28388 13.0228 6.12213 13.4931 5.93783C14.218 5.65372 15.0797 5.31604 16.0428 5.31604C16.1111 5.31604 16.1982 5.31674 16.3011 5.32063C16.497 5.32803 16.7503 5.34699 17.0403 5.39472L14.8829 7.55219C14.7655 7.59247 14.6426 7.63753 14.5132 7.68706C14.4434 7.71374 14.3627 7.74537 14.2756 7.77948C14.0441 7.87016 13.7677 7.97841 13.534 8.05805C13.2085 8.16898 12.7034 8.32218 12.1436 8.32218C11.5944 8.32218 11.1064 8.18517 10.7659 8.0716C10.5003 7.983 10.2095 7.86686 9.97884 7.7747L9.97737 7.77411C9.91977 7.75111 9.86515 7.72929 9.81644 7.71011C9.23253 7.48023 8.87044 7.37611 8.54658 7.37611C6.99978 7.37611 4.99999 8.64632 4.99999 11.9085C4.99999 13.4413 5.41679 15.06 6.02361 16.4114L4.52684 17.9082C3.6332 16.1882 2.99999 14.0067 2.99999 11.9085C2.99999 7.64369 5.79595 5.37611 8.54658 5.37611Z" />
                <path d="M4.18074 23.2041C3.79022 23.5946 3.15705 23.5946 2.76653 23.2041C2.376 22.8135 2.376 22.1804 2.76653 21.7899L20.7898 3.76656C21.1803 3.37603 21.8135 3.37603 22.204 3.76656C22.5946 4.15708 22.5946 4.79024 22.204 5.18077L4.18074 23.2041Z" />
                <path d="M7.74427 21.7618C8.05583 21.9148 8.38567 22 8.74306 22C9.39505 22 9.87382 21.7975 10.3774 21.5845C10.9361 21.3482 11.5254 21.099 12.4156 21.099C13.3053 21.099 13.8403 21.3312 14.3578 21.5559C14.8425 21.7662 15.3119 21.97 16.0428 21.97C17.539 21.97 18.5365 20.6034 19.4886 19.2669C19.7883 18.8287 20.0383 18.3942 20.243 17.9946C20.5058 17.4817 20.694 17.0265 20.8171 16.6955C20.9366 16.3742 20.9946 16.1699 21 16.1433C20.9093 16.1133 18.0378 14.957 18.0378 11.6833C18.0378 11.609 18.0393 11.5358 18.0424 11.4637L16.2178 13.2884C16.5573 14.7469 17.3276 15.8291 18.0978 16.5705C18.2413 16.7087 18.3857 16.836 18.5283 16.953C18.3479 17.3175 18.1224 17.7199 17.8484 18.1224C17.3554 18.814 16.9892 19.3056 16.6189 19.6448C16.2802 19.955 16.1171 19.97 16.0428 19.97C15.7411 19.97 15.6036 19.916 15.1037 19.6993C14.5186 19.4458 13.6884 19.099 12.4156 19.099C11.292 19.099 10.4736 19.3824 9.8823 19.6238L7.74427 21.7618ZM19.0675 15.6303C19.0681 15.6281 19.0684 15.6271 19.0683 15.6274L19.0645 15.6406L19.0675 15.6303Z" />
            </g>
        </svg>
    );
};

export default IconSun;
