# CLAUDE.md

## Project Overview

**hatrisy** is a Vue.js 2 portfolio/demo website built on the [Now UI Kit](https://github.com/creativetimofficial/vue-now-ui-kit) design system by Creative Tim. It includes 50+ reusable UI components and several pre-built pages (landing, profile, resume, login).

## Tech Stack

- **Framework:** Vue 2.6
- **Routing:** Vue Router 3.3
- **CSS Framework:** Bootstrap 4.5
- **CSS Preprocessor:** SCSS/Sass (node-sass)
- **UI Components:** Element UI 2.13
- **Server:** Express.js (production serving)
- **Build Tool:** Vue CLI 4 (vue-cli-service)
- **Linting:** ESLint with eslint-plugin-vue

## Common Commands

```bash
# Install dependencies
npm install

# Start development server (opens browser automatically)
npm run serve
# or
npm run dev

# Production build (outputs to /dist)
npm run build

# Serve production build via Express
npm start
# or
node server.js

# Lint source files
npm run lint
```

> Note: `npm install` automatically runs `npm run build` via the `postinstall` script.

## Project Structure

```
hatrisy/
├── server.js              # Express server for production (serves /dist)
├── vue.config.js          # Vue CLI configuration
├── babel.config.js        # Babel configuration
├── src/
│   ├── main.js            # App entry point — registers plugins and mounts Vue
│   ├── App.vue            # Root component with <router-view>
│   ├── router.js          # Route definitions
│   ├── components/        # Reusable UI components
│   │   ├── Navbar/        # Navigation bar components
│   │   ├── Cards/         # Card variants
│   │   ├── Inputs/        # Form inputs (checkbox, radio, text)
│   │   ├── Collapse/      # Accordion/collapse
│   │   ├── Tabs/          # Tab navigation
│   │   ├── Alert.vue
│   │   ├── Badge.vue
│   │   ├── Button.vue
│   │   ├── Modal.vue
│   │   ├── Pagination.vue
│   │   └── ...
│   ├── layout/            # Page layout wrappers (navbar, footer)
│   ├── pages/             # Routed page components
│   │   ├── Index.vue      # Home page
│   │   ├── Landing.vue    # Landing page
│   │   ├── Login.vue      # Login page
│   │   ├── Profile.vue    # Profile page
│   │   ├── resume.vue     # CV/Resume page
│   │   ├── Clone-index.vue
│   │   ├── css-card.vue
│   │   └── components/    # Nested page-level components
│   ├── plugins/           # Vue plugin registrations
│   │   ├── now-ui-kit.js  # Main plugin (imports CSS, registers directives/components)
│   │   ├── globalComponents.js
│   │   ├── globalDirectives.js
│   │   └── globalMixins.js
│   ├── directives/        # Custom Vue directives (e.g. click-outside)
│   ├── assets/
│   │   ├── scss/          # Global SCSS styles and Bootstrap overrides
│   │   ├── fonts/         # Custom fonts
│   │   └── demo/          # Demo-specific CSS
│   └── neuronNetNotes/    # Educational content on neural networks
└── dist/                  # Production build output (git-ignored)
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Index.vue` | Home page |
| `/landing` | `Landing.vue` | Landing page showcase |
| `/login` | `Login.vue` | Login page template |
| `/profile` | `Profile.vue` | User profile page |
| `/resume` | `resume.vue` | CV/Resume page |
| `/clone` | `Clone-index.vue` | Alternate index page |
| `/card` | `css-card.vue` | CSS card playground |

## Key Files

- `src/main.js` — entry point; imports plugins and creates the Vue instance
- `src/router.js` — all route definitions
- `src/plugins/now-ui-kit.js` — registers all global components and directives
- `server.js` — Express server; reads `PORT` env var (defaults to `80`), serves `/dist`

## Development Notes

- Global components are registered in `src/plugins/globalComponents.js` — add new shared components here.
- SCSS variables and Bootstrap overrides live in `src/assets/scss/`.
- The `postinstall` script runs `npm run build` automatically after `npm install`, which is useful for deployment but can be slow locally. Run `npm install --ignore-scripts` to skip it during development.
