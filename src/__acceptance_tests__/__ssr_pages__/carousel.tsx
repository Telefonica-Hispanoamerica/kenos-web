import * as React from 'react';
import {ButtonPrimary, ButtonLink} from '@components/Buttons';
import {Carousel} from '@components/Carousels';
import {MediaCard} from '@components/Cards';
import {Image} from '@components/Primitives';
import Tag from '@components/Tag';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';

const CarouselTest = (): JSX.Element => (
    <ResponsiveLayout>
        <Carousel
            withBullets
            items={Array.from({length: 3}, (_, idx) => (
                <MediaCard
                    headline={<Tag type="promo_1">Headline</Tag>}
                    title={'Card ' + idx}
                    description="Description"
                    media={
                        <Image
                            src="https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            aspectRatio="16:9"
                        />
                    }
                    button={
                        <ButtonPrimary small onPress={() => {}}>
                            Action
                        </ButtonPrimary>
                    }
                    buttonLink={<ButtonLink onPress={() => {}}>Link</ButtonLink>}
                />
            ))}
        />
    </ResponsiveLayout>
);

export default CarouselTest;
