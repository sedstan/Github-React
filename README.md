# Github-React

Build status: [![Build Status](https://travis-ci.org/sedstan/Github-React.svg?branch=master)](https://travis-ci.org/sedstan/Github-React)

## Table of Contents

<!-- TOC -->

- [Github-React](#github-react)
    - [Table of Contents](#table-of-contents)
    - [Description](#description)
    - [Technologies](#technologies)
    - [Instalation and Usage](#instalation-and-usage)
        - [Installation](#installation)
        - [Usage](#usage)

<!-- /TOC -->

## Description

This app utilises the [Facebook](https://www.facebook.com/) [Create React App](https://github.com/facebook/create-react-app) app generator.

Github-React sources data using the [Github API v4](https://developer.github.com/v4/). It then reduces down using [Redux](https://redux.js.org/). Once reduced, the data is passed onto a Data Container component. The data can then be used by the presentational comonents.

## Technologies 

- React
- Redux
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [React Icons](https://gorangajic.github.io/react-icons/fa.html)

## Instalation and Usage

### Installation

1. Clone or fork this repository.
2. Type ```yarn install``` at the root of the project folder. This will create a `yarn.lock` file listing all dependencies of the project.
3. To add Sass to your project visit the CRA documentation [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc).

4. You will need to create a personal token in your Github account to use with the [api](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql).

### Usage

1. Once your project is set up you will need to create a `config` folder and file inside your `src` folder.
<pre>
    github-react/
    |-- src/
    |    |-- config/
            |-- config.js
</pre>

