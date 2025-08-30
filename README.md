# Nkomor MyNurseAdmin 
## Description

- This React application is built using [Vite](https://vite.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in Typescript.

## Pre-requisites

- [git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) 

## Running in dev environment

1.  `cd MyNurseAdmin`
2.  `npm install`
3.  `npm run dev`

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
 .
 ├── package.json
 ├── public
 │   ├── assets
 │   │   └── images --------- All Project Images
 │   └── favicon.ico
 ├── README.md
 ├── src
 │   ├── App.jsx
 │   ├── hooks -------------- Global app hooks
 │   ├── constants ---------- Global constants
 │   ├── components --------- UI Common Components including svg icons
 │   ├── layouts ---------- all app layouts
 │   │   └── Layout.tsx ------ App layout with sidebar and header
 │   ├── main.jsx
 │   ├── pages -------------- All route pages
 │   │   └── Dashboard  ------------- Dashboard page
 │   ├── routes.tsx ------------- Routing
 │   ├── store
 │   │   ├── dashboard ------------ Dashboard redux
 │   |   |   ├── actions.ts ------------ redux toolkit actions
 │   │   |   ├── constants.ts -------- constants e.g. INITIAL_STATE
 │   │   |   ├── selectors.ts -------- redux selectors
 │   │   |   └── slice.ts ------------- redux toolkit slice
 │   │   ├── types.ts --------- Types for dispatch function and store state
 │   │   └── index.ts ------------- store object
 │   ├── styles
 │   │   ├── index.css ------------ import of all necessary css
 │   │   ├── normalize.css -------- Global foundational styles
 │   │   ├── color-calendar.css --- Color calendar override styles
 │   │   └── font.css ------------- font styles
 │   └── utils
 |       ├── numbers.ts ------------ Helpers for displaying numbers and currency
 │       └── tailwind.jsx ---------- Helper for tailwind classes
 └── tailwind.config.ts ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/main.tsx` is the JavaScript entry point.

You may create subdirectories inside src.

### Aliases

To simplify imports, aliases has been setup for main for main directories in [`vite.config.ts`]

```
  '@': path.resolve(import.meta.dirname, './src'),
  '@utils': path.resolve(import.meta.dirname, './src/utils'),
  '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
  '@pages': path.resolve(import.meta.dirname, './src/pages'),
  '@store': path.resolve(import.meta.dirname, './src/store'),
  '@constants': path.resolve(import.meta.dirname, './src/constants'),
  '@layouts': path.resolve(import.meta.dirname, './src/layouts'),
  '@components': path.resolve(import.meta.dirname, './src/components')
```

### UI components
- Typography
```
    <div>
      <Typography variant="h1">
        Heading 1
      </Typography>
      <Typography variant="h2" weight="medium" color="secondary">
        Heading 2
      </Typography>
      <Typography variant="body1">
        This is body text 1.
      </Typography>
      <Typography variant="body2" weight="medium" color="primary">
        This is body text 2.
      </Typography>
      <Typography variant="body3" weight="regular" color="link">
        This is body text 3.
      </Typography>
    </div>
```

- Buttons
```
  <Button variant="primary" onClick={handlePrimaryClick} weight="medium">
    Primary Button
  </Button>
  <Button variant="secondary" onClick={handleSecondaryClick} weight="strong">
    Secondary Button
  </Button>
```
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm test`

Launches the test runner.<br>

### `npm run test:ui`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```
