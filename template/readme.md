# One React Component: <%= name %>
<% if (description) { %>
> <%= description %>
<% } %>

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/<%= name %>.svg)](https://travis-ci.org/one-react/<%= name %>)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/<%= name %>.svg)](https://circleci.com/gh/one-react/<%= name %>)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/<%= name %>.svg)](https://codecov.io/gh/one-react/<%= name %>) 
[![Version](https://img.shields.io/npm/v/or-<%= name %>.svg)](https://www.npmjs.com/package/or-<%= name %>)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/<%= name %>.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-<%= name %>

// with yarn
yarn add or-<%= name %>

```

## Usage
- Config webpack `sass-loader` if you are using webpack.

## Basic Example

## API
[see](https://one-react.github.io/<%= name %>)

## Customize Theme
**Customize in webpack**
We will use `data` provided by `scss-loader` to override the default values of the variables.
We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'yourCustomTheme.scss'))
      }
    }
  ]
}
```

```css
/**
 * default variables
 **/
$primary-color: #000;
```

```css
/**
 * yourCustomTheme.scss
 **/
$primary-color: red;
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/<%= name %>)

## License

MIT &copy; <%= username %>
