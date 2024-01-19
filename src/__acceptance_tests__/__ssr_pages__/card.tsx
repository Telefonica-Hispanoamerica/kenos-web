import * as React from 'react';
import {MediaCard, DataCard} from '@components/Cards';
import Inline from '@layout/Inline/inline';
import {Image} from '@components/Primitives';
import {ButtonPrimary, ButtonLink} from '@components/Buttons';
import IconAcademicLight from '../../generated/kenos-icons/icon-academic-light';

const CardsTest = (): JSX.Element => (
    <Inline space={16}>
        <MediaCard
            media={<Image aspectRatio="16:9" src="https://i.imgur.com/flZfkiX.png" />}
            headline="headline"
            pretitle="pretitle"
            title="title"
            description="description"
            button={
                <ButtonPrimary small href="https://google.com">
                    Action
                </ButtonPrimary>
            }
            buttonLink={<ButtonLink href="https://google.com">Action</ButtonLink>}
        />
        <DataCard
            headline="headline"
            title="title"
            subtitle="subtitle"
            description="description"
            icon={<IconAcademicLight />}
            button={
                <ButtonPrimary small href="https://google.com">
                    Action
                </ButtonPrimary>
            }
            buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
        />
    </Inline>
);

export default CardsTest;
