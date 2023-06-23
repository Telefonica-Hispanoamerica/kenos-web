import * as React from 'react';
import GridLayout from '@layout/GridLayout/grid-layout';
import {useScreenSize} from '@hooks/hooks';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';

type Props = {
    isOpen: boolean;
    master: React.ReactNode;
    detail?: React.ReactNode;
    children?: void;
};

const MasterDetailLayout: React.FC<Props> = ({isOpen, master, detail}) => {
    const {isTabletOrSmaller} = useScreenSize();

    if (isTabletOrSmaller) {
        return <ResponsiveLayout>{isOpen ? detail : master}</ResponsiveLayout>;
    }

    return (
        <ResponsiveLayout>
            <GridLayout template="4+6" left={master} right={detail} />
        </ResponsiveLayout>
    );
};

export default MasterDetailLayout;
