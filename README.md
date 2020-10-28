# projectkick

## Features
* Webpack
* Babel
* React/Redux
* SCSS/PostCss

All sccs files in [`/src/scss/auto-imports`](/src/scss/auto-imports) are automatically prefixed to each `.scss` required by Webpack via [sass-resources-loader](https://www.npmjs.com/package/sass-resources-loader)  
That's why it *should not* create output of it's own ([see docs](https://www.npmjs.com/package/sass-resources-loader#tips)) 

## Config
All properties of the field `projectConfig` in the `package.json` will be provided to your 
* Global js variable `CONFIG`

## Getting started
have a look at [`/src/javascript/index.js`](/src/javascript/index.js), [`/src/scss/index.scss`](/src/scss/index.scss) and [`/src/assets/index.html`](/src/assets/index.html)

Also you might want to replace the name "projectkick" in all files
* `readme.md` (this file - go and write your own readme)
* `/package.json`
* `/src/assets/index.html`
* `/scripts/webpack.config.dev.js`
* `/scripts/webpack.config.prod.js`
