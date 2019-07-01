# Github-React

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0a992bce31c14e3c873e5545ef4fdfd6)](https://app.codacy.com/app/sedstan/Github-React?utm_source=github.com&utm_medium=referral&utm_content=sedstan/Github-React&utm_campaign=Badge_Grade_Dashboard)
 [![Build Status](https://travis-ci.org/sedstan/Github-React.svg?branch=master)](https://travis-ci.org/sedstan/Github-React)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3506d8e8-90d1-48e5-b083-76cbad8694aa/deploy-status)](https://app.netlify.com/sites/dreamy-poitras-890e5f/deploys)


## Description

This app utilises the [Facebook](https://www.facebook.com/) [Create React App](https://github.com/facebook/create-react-app) app generator.

Github-React sources data using the [Github API v4](https://developer.github.com/v4/). It then reduces down using [Redux](https://redux.js.org/). Once reduced, the data is passed onto a Data Container component. The data can then be used by the presentational comonents.

## Technologies 

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [React Icons](https://gorangajic.github.io/react-icons/fa.html)

## Installation and Usage

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
