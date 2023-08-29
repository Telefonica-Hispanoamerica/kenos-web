import {Text2, Text6, Stack, Box, ResponsiveLayout, skinVars, ButtonLink, TextLink, Inline} from '../src';
import logo from '../img/mistica-react-logo.svg';

export default {
    title: 'Welcome',
};

const Paragraph = ({children}) => {
    return (
        <Text2 as="p" color={skinVars.textSecondary}>
            {children}
        </Text2>
    );
};

export const Welcome = () => {
    return (
        <ResponsiveLayout>
            <Box paddingY={32}>
                <Stack space={24}>
                    <Stack space={16}>
                        <Text6 as="h2">Bienvenido a Kenos Storybook</Text6>
                        <img src={logo} alt="Mistica loves react" />
                    </Stack>
                    <Stack space={16}>
                        <Paragraph>
                            Explore las historias en el menú de la barra lateral para conocer los diferentes componentes de React
                            en el catálogo de Kénos y ver ejemplos de uso para cada componente.
                        </Paragraph>
                        <Paragraph>
                            ¿Buscas un componente especifico? Puedes usar la barra de búsqueda o simplemente presionar '/' y comenzar a escribir.
                        </Paragraph>
                        <Paragraph>
                            Kénos viene con soporte integrado para los diferentes esquemas de color de la marca Telefónica Hispam.
                            Utilice el selector de temas en la barra de herramientas en la parte superior para cambiar entre los temas soportados (Telefónica y Movistar)
                        </Paragraph>
                        <Paragraph>
                            Para crear prototipos rápidamente utilizando componentes de Kénos, utilice <TextLink href="/playroom">Kénos Playroom</TextLink>. 
                            Usando Playroom puedes diseñar simultáneamente en una variedad de temas y tamaños de pantalla,
                            impulsado por la biblioteca de componentes JSX y Kénos.
                            Es la herramienta perfecta para crear maquetas rápidas y prototipos interactivos con código real.
                            También te permite compartir tu trabajo con otros simplemente copiando la URL.
                        </Paragraph>
                    </Stack>
                    <nav style={{margin: '0 -8px'}}>
                        <Inline space={8}>
                            <ButtonLink href="https://github.com/Telefonica/mistica">
                                Acerca de Kénos
                            </ButtonLink>
                            <ButtonLink href="https://github.com/Telefonica/mistica-web#getting-started">
                                Empezando
                            </ButtonLink>
                            <ButtonLink href="/playroom">Playroom</ButtonLink>
                        </Inline>
                    </nav>
                </Stack>
            </Box>
        </ResponsiveLayout>
    );
};
