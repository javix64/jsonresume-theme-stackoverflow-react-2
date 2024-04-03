# JSONRESUME-Stackoverflow-React

## UNDER CONSTRUCTION README.MD

This is a fork from [`jsonresume-theme-stackoverflow`](https://github.com/levino/jsonresume-theme-stackoverflow-react) by [`@levino`](https://github.com/levino), which is a fork from the original [`jsonresume-theme-stackoverflow`](https://www.npmjs.com/package/jsonresume-theme-stackoverflow).

I have removed some unnecesary packages and refactor the files/folder of the project, now the project looks more clean and simple.

## Usage

This package exports different theme generation scripts for different languages (English, German & Spanish) in folders like `/dist/{LANGUAGE}/index.js` so once you have installed the package in your local project, you can do things like:

```
npm resume export -r resume.json -t ./node_modules/jsonresume-theme-stackoverflow-react/dist/de CV.pdf
```

### Development theme

For watching changes with vite at real time use: `npm run dev`

### Build
