# ![logo](https://imgur.com/DoiPTMm.png)Eidolon experience calculator

:video_game: _Small helper for Aura Kingdom. Supports:_ :es: :brazil: :gb: :fr: :de:

![status](https://img.shields.io/badge/status-OK-green) ![readme](https://img.shields.io/badge/readme-OK-green) ![version](https://img.shields.io/badge/version-v0.1.0-blue) ![techs](https://img.shields.io/badge/techs-React--Bootstrap-f394f3)  

---

**Visit the website for this project [here](https://crystal-moon.github.io/eidolon-exp).**

### Using ReactJS

Created using the `create-react-app`. Bootstrap libraries are taken directly from the CDN :blush:

### Special Input

This application is using a numerical input with two styles in one. Ideal for monetary values, percentages, etc., where it is required to differentiate the parts for a better understanding, either with another size, another color, etc.

![example_input](https://imgur.com/yR8ndJM.gif)

### Multilingual

The website is available in Spanish, English, Portuguese, French and German. Most of the translations were done with automated tools. Not all were verified by hand, therfore errors are likely. :disappointed_relieved:

If you encounter any translation errors, please contact crystal.marino345@gmail.com or open an issues here on GitHub.

Usually `i18next` would be used to handle multiple languages, but the configuration and power of the tool was too immense for the size of this project :sweat_smile:. That is why this project uses a custom system to handle languages. Simple JSON, arranged as ReactJS components are arranged for greater convenience.

##### Example: Folder and file structure

###### Folder structure
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

The `lang` property is inherited from the highest component of the project (App.jsx), where it has the 'default' flag set.
In this project you can find the `Lang` component which is basically a` <select> `that will change the state of the App and with it all the existing texts. And thanks to ReactJS's virtual DOM, this happens instantly :astonished:

---

:carousel_horse: Every project of my authorship is for free use and improve for whoever wants to do so :octocat:

_Made with love by [**CrystalMoon**](https://www.linkedin.com/in/perla-stto/)_ :heart:
