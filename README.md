# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Additional Configured Packages

### Biome

Uses Biome as the configued linter and formatter. It is faster than pretties and has better hints for linting than ESLint.

The configuration file is Biome.json

### SASS

Uses Sass Modules for CSS styling. This helps with global CSS variables and some other nifty options. The global variables are declared in [file](./src/styles/variables.scss)

This file must be added to the [ViteConfig](./vite.config.ts) like this:

```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
        scss: {
            additionalData: `@import "./src/styles/variables.scss";`
        }
        }
    }
    });
```
