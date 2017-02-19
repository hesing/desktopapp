# Angular JS with Electron

## Install 

```
npm i
gulp or npm run dev // run angular app
npm run electron // run electron dev mode
npm start // run angular with electron
// http://localhost:3000
```

Modular gulp build each task in it's own fles, Modular Angular App

- clean build directory
- concatenation js & css
- copy extra stuff like fonts, images, favicon.ico to build directory
- css minification
- js minification
- image minification
- js code linting 
- watching js, css, html, sass file changes
- code versioning
- Angular JS code annotation


## How to use

- all html changes inside `components/` corresponding folder
- all js in `components/`
- all 3rd party module in `vendor` folder
- all common css inside `css` folder
- all component specific css inside corresponding `components/` folder 

## Build Step

```
npm run build ( production )
```

## Run generator

```
npm run c --name mydemo
gulp component --name mydemo
```

## Hack

- fonts folder in 2 places
	1. inside `scss` folder so it can refer fonts in .scss file
	2. inside root so can be referenced in css with same path as above

## Todo

```
gulp build-electron

Have error need to be fixed "Error: rcedit.exe failed with exit code 1. Fatal error: Unable to load file"
```







