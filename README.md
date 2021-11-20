<p align="center">
<img
    width="650"
    height="450"
    src="https://raw.githubusercontent.com/ChamsBouzaiene/react-component-lib-boilerplate/main/stories/assets/logo.png"
  />
<br />
Your Fancy new React Library BoilerPlate
<br /><br />
<a href="https://github.com/ChamsBouzaiene/react-component-lib-boilerplate/actions/workflows/chromatic.yml">
<img src="https://github.com/ChamsBouzaiene/react-component-lib-boilerplate/actions/workflows/chromatic.yml/badge.svg?branch=main" />
</a>
<a href="https://npm.im/react-component-lib-boilerplate">
<img src="https://img.shields.io/npm/v/react-component-lib-boilerplate.svg" />
</a>
<a href="https://npm.im/react-component-lib-boilerplate">
<img src="https://badgen.net/npm/dw/react-component-lib-boilerplate" />
</a>
<a href="https://github.com/ChamsBouzaiene/react-component-lib-boilerplate/blob/main/LICENSE">
<img src="https://badgen.now.sh/badge/license/apache2" />
</a>
<a href="https://bundlephobia.com/result?p=react-component-lib-boilerplate">
<img src="https://badgen.net/bundlephobia/minzip/react-component-lib-boilerplate" />
</a>
<a href="https://github.com/ChamsBouzaiene/react-component-lib-boilerplate/reaviz">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/ChamsBouzaiene/react-component-lib-boilerplate?style=social" />
</a>&nbsp;&nbsp;
<a href="https://discord.gg/ATTvQVug">
<img src="https://img.shields.io/discord/844715176895840286?label=discord" />
</a>

</p>

---

React Component Library boilerplate is a component library template that leverages React and github to create
a custome template for developpers that want to start building their component libraries the easy way

## 🚀 Quick Links

-   Checkout the [npm](https://www.npmjs.com/package/react-component-lib-boilerplate)
-   Checkout the [storybook](https://chamsbouzaiene.github.io/react-component-lib-boilerplate/)
-   Learn more in the [docs](https://chamsbouzaiene.github.io/react-component-lib-boilerplate/?path=/story/docs-getting-started-quick-start--page)
-   Explore the library on [Chroma](https://www.chromatic.com/library?appId=609c917d0b987a00390d989b)
-   Learn about updates from the [changelog](CHANGELOG.md)

## 🤔 Why ?

-   Am Lazy ,I built this project so i can have a template to build react component library from it ,I don't want to spend more days configureing linters ci/cd typescript etc..

## 🤓 How to use it

### Template

-   All you have to do to use our fancy template library thanks to github is press the gree button at the top right `Use This Template` make sure to grab `gh-pages` branch like that tada you have the setup with the ci/cd feature and all the goodies.

-   you need to setup two secret keys under github secrets for the Github Acions

    -   `CHROMATIC_PROJECT_TOKEN` [Chromatic](https://www.chromatic.com/) project token
    -   `NPM_TOKEN` [NPM](https://www.npm.com/) project token

-   clone the repo and start coding your new fancy component library

-   don't forget to change the name of the package change the author reset the tags and start publishing your fancy lib

### Base Library

-   The library is exporting sample base components to be used in react project you can test it like this :
    -   NPM: `npm install react-component-lib-boilerplate --save`
    -   YARN: `yarn add react-component-lib-boilerplate`

```js
import { ThemeProvider, Button, Header } from 'react-component-lib-boilerplate';

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Button label="hi" />
                <Header user={{ name: 'chams' }} />
            </ThemeProvider>{' '}
        </div>
    );
}
```

-   As shown above the library is exporting `ThemeProvider` a component that give us the capacity to introduce themes to our base components

-   To customize various elements, we use our custom [Styled Components Themes]. This gives you fine grain control over the styles there is to available themes dark and light theme now we are using darktheme as default:

    -   `lightTheme`
    -   `theme`

You can change the theme using styled-component ThemeProvider

```js
import { ThemeProvider, Button, Header, theme, lightTheme } from 'react-component-lib-boilerplate';

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Button label={'am themed'} />
        </ThemeProvider>;
    );
}
```

-   this themes are customisable by the library developper or by the end-user who can extend them as he wish that's why it's a good idea to export a base Theme

## ✨ Features

-   Visual Testing / Chromatic :

    -   using chromatic you can track version of your storybook test visual changes and access your storybooks
    -   we are using chromatic application to apply visual testing when the dev create a merge request we deploy the storybook stories to chromatic and we diff the images and we ask for review in order to accept the PR

-   Components exampels (base components):

    -   i have built this component to showcase a pattern for the user all our components are built in typescript we decompose all of them to styled/test/stories/component

-   Styled-system / styled-components :

    -   this two libraries are a match made in heaven we are using them to enhance the development experience , using the theme we are able to create props variants that make our style props determinstic.

-   Testing :

    -   we are using react-testing-library to test most of our components and we advise you to do the same at least test the entry points and add a snapshot

-   Components :

    -   the base components are there to guide the user on how to satisfy our linters typescript

-   StoryBook :

    -   is a big part of this library we can use it to write custom documentation as well as components documentation we also ship the library with accessibility addons to test the componet accessibility

-   Prettier/eslint :

    -   the library is preconfigured with eslint and prettier for typescript

-   Build :

    -   we are using rollup for building the library it's all setup from the start

-   CI/CD (github actions) :
    -   storyBook (gh-action) builds and deploys the storybook bundle to github pages on user tag
    -   chromatic (gh-action) builds and deploys the storybook bundle to chromatic and review visual diffs on user pull request and push to main
    -   publish (gh-action) build and publish the repository , release a new github release version on user push new tag "v\*"

## TODOs 🤯:

-   Improve Bundel size
-   Get some sleep
