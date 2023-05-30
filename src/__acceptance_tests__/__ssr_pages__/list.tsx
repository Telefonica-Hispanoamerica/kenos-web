import * as React from 'react';
import {RowList, Row, BoxedRowList, BoxedRow} from '@components/Lists';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import NegativeBox from '@utils/negative-box';
import {Title1} from '@components/Title';
import Avatar from '@components/Avatar';

const ListTest = (): JSX.Element => (
    <ResponsiveLayout>
        <Title1>Simple list</Title1>
        <NegativeBox>
            <RowList>
                <Row
                    asset={<Avatar size={40} />}
                    title="Title"
                    description="Description"
                    onPress={() => {}}
                />

                <Row
                    asset={<Avatar size={40} />}
                    headline="Headline"
                    title="Title"
                    subtitle="Subtitle"
                    description="Description"
                    badge={9}
                    href="https://google.com"
                />

                <Row
                    asset={<Avatar size={40} />}
                    title="Title"
                    description="Description"
                    switch={{defaultValue: false}}
                />

                <Row
                    asset={<Avatar size={40} />}
                    title="Title"
                    description="Description"
                    checkbox={{defaultValue: true}}
                />
            </RowList>
        </NegativeBox>

        <Title1>Boxed rows list</Title1>
        <BoxedRowList>
            <BoxedRow
                asset={<Avatar size={40} />}
                title="Title"
                description="Description"
                onPress={() => {}}
            />

            <BoxedRow
                asset={<Avatar size={40} />}
                headline="Headline"
                title="Title"
                subtitle="Subtitle"
                description="Description"
                badge={9}
                href="https://google.com"
            />

            <BoxedRow
                asset={<Avatar size={40} />}
                title="Title"
                description="Description"
                switch={{defaultValue: false}}
            />

            <BoxedRow
                asset={<Avatar size={40} />}
                title="Title"
                description="Description"
                checkbox={{defaultValue: true}}
            />
        </BoxedRowList>
    </ResponsiveLayout>
);

export default ListTest;
