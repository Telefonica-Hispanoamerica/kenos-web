![Mistica for Web](img/mistica-web-light-kenos.svg#gh-light-mode-only)
![Mistica for Web](img/mistica-web-dark-kenos.svg#gh-dark-mode-only)

React components library for Telefonica Kenos Design System ([Mistica](https://github.com/TelefonicaAR/kenos-ui))

![Node.js CI](https://github.com/Telefonica/mistica-web/workflows/Node.js%20CI/badge.svg)

## Que es Kenos
Esta es una colección de componentes gráficos para React que te permiten construir aplicaciones web modernas y atractivas con facilidad destinados para  [Telefonica Hispam](https://www.linkedin.com/company/movistar-telefonica-hispam/about/) . Desde botones hasta gráficos y tablas, la librería Kenos ofrece una amplia variedad de componentes altamente personalizables y fáciles de usar que te ayudarán a mejorar la usabilidad y el atractivo visual de tus proyectos de React.

![Mistica for Web](img/mapaHispam.png)

## Para empezar a trabajar
Solamente con los comandos de instalación en tu proyecto react podrás utilizar esta librería.
### Install

```terminal
yarn add @telefonica/mistica
```

or si utilizas npm 

```terminal
npm install @telefonica/mistica
```

## Para utilizar el storybook 
Para visitar todos los componentes kenos tiene un storybook para mostrarte sus diferentes formas y comportamientos.
### Install

```terminal
> yarn install
```

```terminal
> yarn storybook
```

## Para inyectar componente 

Antes de usar cualquiera de nuestros componentes, debes agregar `<ThemeContextProvider>` en la raíz de su aplicación React.
Aquí hay un ejemplo completo de un formulario con dos campos de texto y un botón de envío:

```javascript
import {createRoot} from 'react-dom/client';
// Import Mistica styles. Depending on the bundler you use, you may need to import it in a different way.
import '@telefonica/mistica/css/mistica.css';

// Use mistica components
import {
  ThemeContextProvider,
  Form,
  Box,
  Stack,
  TextField,
  EmailField,
  ButtonLayout,
  ButtonPrimary,
  alert,
  getMovistarSkin,
} from '@telefonica/mistica';

const App = () => (
  <Form
    onSubmit={(formData) =>
      alert({
        title: 'This is your data',
        message: JSON.stringify(formData, null, 2),
      })
    }
  >
    <Box padding={16}>
      <Stack space={16}>
        <TextField name="name" label="Name" />
        <EmailField name="email" label="Email" />
        <ButtonLayout>
          <ButtonPrimary submit>Send</ButtonPrimary>
        </ButtonLayout>
      </Stack>
    </Box>
  </Form>
);

const misticaTheme = {
  skin: getMovistarSkin(),
  i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <ThemeContextProvider theme={misticaTheme}>
    <App />
  </ThemeContextProvider>
);
```

El prop `theme` en `ThemeContextProvider` es **obligatorio**, y podes usarlo para configurar algunos aspectos de
la biblioteca. Hay múltiples configuraciones, pero los únicos dos campos obligatorios son `skin` e `i18n`. Leer el [theme config doc](doc/theme-config.md) para más información.

:advertencia: Por lo general, el objeto `tema` es constante y no necesitará cambiar dinámicamente en su aplicación, en
ese caso recomendamos extraerlo a una variable `const` externa fuera del componente, de esta manera el
la referencia del objeto será la misma en cada renderizado. Si por alguna razón el `tema` debe ser dinámico en su
app, considera memorizarla (por ejemplo, con el gancho `React.useMemo`).



## Development

- `yarn test`: run tests
- `yarn test-acceptance`: run acceptance tests headless (you need to start storybook first)
- `yarn test-acceptance --ui`: run acceptance tests with ui (you need to start storybook first)
- `yarn lint`: check codestyle
- `yarn ts-check`: check static types
- `yarn build`: build package
- `yarn storybook`: starts storybook
- `yarn playroom`: starts playroom


## GitFlow

PENDIENTE - Aqui se detallarán los pasos que se deben seguir para crear/modificar/borrar un componente de esta liberia 
## Buenas Prácticas

PENDIENTE - Aqui se detallarán las buenas practicas que se deben llevar a cabo 

## Sistema de Iconos

Los iconos se manejan por separados en el repositorio de Kenos-Iconos.

PENDIENTE - Aqui se puede detallar los pasos a seguir para crear un nuevo icono. 
