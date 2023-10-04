# Welcome to the Front End of Feed. #

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Locally, the project is running on [http://localhost:3000](http://localhost:3000). This project is currently in development and is not live.


## Directory Structure ##
This project is broken up in the following manner:
1. Boilerplate + Config (project root)
2. Pages (Next routing)
3. Components
4. API
5. State
6. Utilities

### 1. Boilerplate & Config ###
The frontend of this project is built with NextJS and TypeScript. I'm using styled-components (& Babel) for CSS, Jest for testing, and ESLint for linting. 

### 2. Pages ###
The app, document and index files are all NextJS boilerplate. 
<br />
<br />
While Next 13 released the App directory at the time of this development, I've decided to use the pages directory alongside the Layout component. `Layout` is defined within `components > styles`, but sits within `_app.tsx`. The majority of the boilerplate written inside `_document.tsx` is to setup server side rendering (SSR) for styled-components. `Index` is the default page ( / ), which redirects to the directory page. I could have kept index as the directory page file, however I prefer to explicitly state what the page is and redirect index. 

### 3. Components ###
The component heirarchy is set up as follows (from most to least specific): `Styles > Elements > Containers > Components`. By default, the styles directory via global styles will define elements such as buttons or links. The elements directory exists for flexibility, should I choose to create a component that can have styling adjusted via props. Containers are groups of elements such as an individual post navigation. Components exist as a group of containers and typically represent large sections of a page, such as the primary navigation, comment section or search modal.
<br />
<br />
Because this project uses styled-components, the styles directory exists mainly for global styles and the wrapper (Layout). All component files have dedicated directories consisting of three files: `.test.ts`, `.styles.ts`, and `index.tsx`. The styles file exists to separate styling objects and logic within `index.tsx` due to the sheer size of some component styles. Any styling that isn't covered by the global styles is written here, such as specific container sizing.
<br />
<br />
The naming convention of custom styled-components is both experimental and based on this [post by Robin Wieruch](https://www.robinwieruch.de/styled-components/). The idea with namespacing is to shorten styled-component's names (which is typically prefixed with 'styled') for brevity's sake. To keep naming convention consistent with the component heirarchy, all global styles/elements specifically imported from global styles are prefixed with a capital `S`. All custom elements within containers are imported/namespaced into the index file with the prefix `SC.`, and all custom elements within sections are prefixed `SS.`.

### 4. API ###
Due to the simplicity of the data consisting of only users, posts and comments, I've decided not to align the API structure with the component structure. Each API endpoint has a dedicated file to handle CRUD, with TypeScript interfaces defined at the top of each file.

### 5. State ###
While I'm undecided if this project requires scalable state management such as Redux, I'll be storing state in a dedicated directory here.

### 6. Utilities ###
While not currently being utilized, this directory will hold all functionality that is used across the project, such as date formatting or currency conversion. 
