# component template

> a SAOJS template for one react components

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![Build Status](https://img.shields.io/travis/one-react/component-template.svg)](https://travis-ci.org/one-react/component-template)
[![Build Status](https://img.shields.io/circleci/project/github/one-react/component-template.svg)](https://circleci.com/gh/one-react/component-template)
[![Version](https://img.shields.io/npm/v/or-template.svg)](https://www.npmjs.com/package/or-template)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/one-react/component-template.svg)](https://greenkeeper.io/)

## Features
* Bundle `lib`(commonjs) and `es` module format
* Semantic release manages npm package publishment
* Babel@7 for transpiling
* Typescript support
* Sass support
* Storybook for examples and local dev, and auto deploy to gh-pages in CI
* Jest for unit test
* TravisCI and CircleCI integrations
* Greenkeeper to manage update for npm dependencies
* Tslint and prettier for code styles

## Installation
> recommend node >= 8

Install [SAOJS](https://github.com/egoist/sao) first.

```bash
npm i -g sao
```

## Create a new component

### From git(recommend)

```bash
cd my-component
sao one-react/component-template --update // force using latest
```

### From npm

```bash
cd my-component
sao or-template --update
```

After answering necessary questions, the component initial process begins:
* Copy files from this template
* Install node modules by npm
* Initialize git repo
Then the project structrue should be like this:

<p align="center">
  <img width="600" src="https://cdn.rawgit.com/one-react/component-template/dev/assets/dir-tree-view.png" alt="dir tree view">
</p>

## Development
> Must install dependencies under both root dir and `examples` dir firstly

```bash
cd examples
npm run dev
```

Open `http://localhost:9001` to see your component running in browser.

### Npm package publish
`Semantic release` will release the package by [SemVer](https://semver.org) in CI process(only master branch)

### Docs/examples deployment
Bundles from examples will be deployed in CI process(only master branch)

## License

MIT &copy; [One React](github.com/one-react)
