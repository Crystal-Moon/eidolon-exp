# ![logo](https://imgur.com/DoiPTMm.png)Calculadora de experiencia Eidolon

:video_game: _Pequeño helper para la comunidad de AuraKingdom de varios servers_ :es: :brazil: :gb: :fr: :de:

![status](https://img.shields.io/badge/status-OK-green) ![readme](https://img.shields.io/badge/readme-OK-green) ![version](https://img.shields.io/badge/version-v0.1.0-blue) ![techs](https://img.shields.io/badge/techs-React--Bootstrap-f394f3)  

Click [here](README_EN.md) for the english version of this readme.

---

**Puede visitar este proyecto deployado [aqui](https://crystal-moon.github.io/eidolon-exp).**

### En ReactJS

Creado con `create-react-app`. Las librerias de Bootstrap son tomadas de su CDN :blush:

### Special Input

Un imput númerico con dos estilos en uno. Ideal para valores monetarios, porcentajes, etc., donde se requiera diferenciar las partes para un mejor entendimieto del cliente, ya sea con otro tamaño, otro color, etc.

![ejemplo_input](https://imgur.com/yR8ndJM.gif)

### Multilenguaje

El sitio web se encuentra en español, inglés, portugués, francés y alemán. Las traducciones fueron realizadas con herramientas de internet y verificadas con mis limitados conocimientos. Es posible que haya errores de dialecto :disappointed_relieved:    

En principio utilizaría `i18next`, pero la configurción y el poder de esta herramienta era inmenso para lo que es el proyecto :sweat_smile:. Por ello me diseñe mi propia infraestructura para los idiomas. Simples JSON, ordenados como se ordenan los componentes de react para mayor comodidad a la hora de presentar y/o comparar las traducciones.

##### Orden y uso: ejemplo

###### Estructura de carpetas
```
- src
   |- components
   |     └ Header.jsx
   └- lang
         └ Header.json
```

###### Header.json
```json
{
  "welcome":{
    "es": "Bienvenido",
    "en": "Welcome",
    "fr": "Bienvenue"
  }
}
```
###### Header.jsx
```javascript
import TXT from '../lang/Header.json'

function Header(props) {
  const lang = props.lang;
  return (
      <h1>{ TXT.welcome[lang] }</h1>
  );
}

export default Header;

```

La propiedad `lang` viene heredado desde el componente más alto del proyecto (App.jsx), donde tiene su 'default' establecido.    
En este proyecto se puede encontrar el componente `Lang` que es, basicamente, un `<select>` que cambiara el state de App y con ello todos los textos existentes. Y gracias al DOM virtual de React, esto sucede instantaneamente :astonished:

---

:carousel_horse: Todo proyecto de mi autoría es de libre uso y mejora para quién desee hacerlo :octocat:  
_Hecho con amor por [**CrystalMoon**](https://www.linkedin.com/in/perla-stto/)_ :heart:
