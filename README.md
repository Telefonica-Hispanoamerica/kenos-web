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

// hasta aqui llegue (LUCHO)

The `theme` prop in `ThemeContextProvider` is **mandatory**, and you can use it to configure some aspects of
the library. There are multiple settings but the only two mandatory fields are `skin` and `i18n`. Read the
[theme config doc](https://github.com/Telefonica/mistica-web/blob/master/doc/theme-config.md) for more info.

:warning: Usually, the `theme` object is constant and won't need to change dynamically in your application, in
that case we recommend to extract it to an external `const` variable outside of the component, this way the
object reference will be the same in every re-render. If for some reason the `theme` must be dynamic in your
app, consider to memoize it (for example, with `React.useMemo` hook).

## Components

Explore the components in [Mistica storybook](https://mistica-web.vercel.app)

Start prototyping interfaces with Mistica components in the
[Mistica playroom](https://mistica-web.vercel.app/playroom)

## More docs

- [Examples](https://github.com/Telefonica/mistica-web/tree/master/examples)
- [Understanding Mistica's layout components](https://github.com/Telefonica/mistica-web/blob/master/doc/layout.md)
- [Working with forms](https://github.com/Telefonica/mistica-web/blob/master/doc/forms.md)
- [Theme config options](https://github.com/Telefonica/mistica-web/blob/master/doc/theme-config.md)
- [Customize default texts](https://github.com/Telefonica/mistica-web/blob/master/doc/texts.md)
- [Analytics](https://github.com/Telefonica/mistica-web/blob/master/doc/analytics.md)
- [Style your components](https://github.com/Telefonica/mistica-web/blob/master/doc/styles.md)
- [Fonts](https://github.com/Telefonica/mistica-web/blob/master/doc/fonts.md)
- [Testing notes](https://github.com/Telefonica/mistica-web/blob/master/doc/testing.md)

## Development

- `yarn test`: run tests
- `yarn test-acceptance`: run acceptance tests headless (you need to start storybook first)
- `yarn test-acceptance --ui`: run acceptance tests with ui (you need to start storybook first)
- `yarn lint`: check codestyle
- `yarn ts-check`: check static types
- `yarn build`: build package
- `yarn storybook`: starts storybook
- `yarn playroom`: starts playroom

## More about Mistica

- [Mistica, the Telefonica Design System](https://github.com/Telefonica/mistica)

### Mistica in other platforms

- [Android](https://github.com/Telefonica/mistica-android)
- [iOS](https://github.com/Telefonica/mistica-ios)

## Contributing

See [CONTRIBUTING.md](https://github.com/Telefonica/mistica-web/blob/master/CONTRIBUTING.md)
