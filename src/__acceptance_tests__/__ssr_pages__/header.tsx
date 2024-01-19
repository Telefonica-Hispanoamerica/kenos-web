import * as React from 'react';
import Stack from '@layout/Stack/stack';
import {ButtonPrimary,} from '@components/Buttons';
import {Header, HeaderLayout, MainSectionHeader, MainSectionHeaderLayout} from '@components/Headers';

const HeaderTest = (): JSX.Element => (
    <Stack space={8}>
        <HeaderLayout
            header={
                <Header
                    title="La última factura de diciembre ya esta disponible"
                    preamount="Cuota mensual (IVA incluido)"
                    amount="60,44 €"
                    button={<ButtonPrimary href="asdf">Descargar factura</ButtonPrimary>}
                    subtitle="Y esto es un subtitulo"
                />
            }
        />
        <MainSectionHeaderLayout>
            <MainSectionHeader
                title="Soporte"
                description="¿En qué podemos ayudarte?"
                button={<ButtonPrimary href="asdf">Acción</ButtonPrimary>}
            />
        </MainSectionHeaderLayout>
    </Stack>
);

export default HeaderTest;
