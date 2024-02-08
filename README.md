# `mfer`

Repository for experimenting with micro-frontends using [`importmap`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) and/or other native browser technologies.

## Goals

- As little building of each mfe as necessary, i.e. leverage native ES modules, import maps, and CDNs to make the browser and network do most of the work.
- No vendor lock-in, use only native technologies to implement micro-frontends.
- Identify a pattern in order to develop a tool(s) that can help with configuration of the container application based on the dependencies, build and other requirements of the individual mfes.

## Running

This will run the example container application which embeds a React and Vue application. The apps search [dev.to](https://dev.to/) for articles based on the topic entered.

1. `npm i`
2. `npm run build -w react-app`
3. `npm run build -w vue-app`
4. `npm run serve`
5. Navigate to localhost:8080.

## Todo

Lots.

- How to best build the mfes and register relevant info to the container application:
  - The mfe's bundle filename.
  - The peer dependencies needed by each mfe and their CDN locations.
  - Necessary scopes for versioning of similar dependencies (like lodash, etc.).
  - All the details needed to construct the import map used by the container...
- How to register which DOM nodes each mfe will render into, and how to best decouple that from development of each mfe in isolation so that each app can support whatever development workflow they want.
- Figure out what else I need to figure out!
