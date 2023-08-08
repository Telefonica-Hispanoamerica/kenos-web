# Automatización de create/update de skins

### Contexto:
Poseemos un ingenioso script alojado en la ruta /packages/tokens/index.js, el cual desempeña la tarea de establecer comunicación con un repositorio y recuperar el JSON que alberga los tokens según el nombre del estilo que deseamos adquirir.  

Estos parametros deben ser declarados en el archivo .env y se pueden utilizar como referencia el .env.example ambos ubicados en el root del proyecto.

[archivo .env](/.env.example)

~~~
BRANCH=develop
REPO_URL=https://github.com/TelefonicaAR/kenos-design.git
FILE_NAME=mi-movistar-skin.tsx
NAME_SKIN_CONSTANT=MI_MOVISTAR_SKIN             
NAME_FUNCTION_GET_SKIN=getAppMiMovistarSkin     
KEY_SKIN_NAME=App Mi Movistar
~~~



Debemos realizar modificaciones a los siguientes archivos de la libreía

___
[constants.tsx](../src/skins/constants.tsx)

Aqui vamos a incluir un nuevo valor al listado de constantes haciendo referencia al nuevo skin (AppNuevoSkin) que queremos agregar.

* **export const MI_NUEVO_SKIN = 'AppNuevoSkin';**

___
[types.tsx](../src/skins/types.tsx)

En el archivo types.tsx vamos a incluir un nuevo elemento al tipado KnownSkinName que debe coincidir con la constante agregada en el archivo constants.tsx.

* export type KnownSkinName = 'Movistar' | 'Telefonica' | 'AppMiMovistar' | **'AppNuevoSkin'** ;

___
[colors.js](../.storybook/colors.js)

En el archivo colors.js tenemos que incluir la constante  **'AppNuevoSkin'** en los parametros

 * @param {'Movistar' | 'Telefonica' | 'AppMiMovistar' | **'AppNuevoSkin'**} 

Ademas en la constante getColors se debe agregar un caso extra (case) en el switch haciendo referencias del nuevo skin 

~~~
case 'AppNuevoSkin':
    return {
        primary: '#019df4', // TREF = movistarBlue
        textPrimary: '#313235', //  REF = grey6
        textPrimaryInverse: '#FFFFFF', // ODO: REF = white
        textSecondary: '#86888c', // REF = grey5
    };
~~~


