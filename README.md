<p align="center">
  <img width="350" src="./packages/docs/static/img/logo.svg" />
  <h1 align="center">graphql-mocks</h1>
</p>

## 👋 Welcome

Hello, you've reached the lerna mono repo for `graphql-mocks`.

Check out the [website](https://www.graphql-mocks.com) for an introduction on getting started with graphql-mocks.

The individual packages hosted in this repo can be found in the `packages` folder, they include:

- `graphql-mocks` — The main package containing the core functionality
- `@graphql-mocks/mirage` — Provides the Mirage JS middleware and resolvers
- docs — Contains the documentation generated by docusaurus

## 🏗 Developing

Clone the repo, then:

1. Run `yarn` to setup packages
2. Run `yarn bootstrap` to bootstrap package dependencies
3. Run `yarn link-packages` to cross-link packages within monorepo to respective package's `dist` folder

If changes are isolated to a single package then you should be all set.

If changes are in multiple packages where there is a dependency then changes will need to be rebuilt in dependent packages. Cross-dependencies are linked to `dist` folder in the dependency package-specific root (`package/*`) folder. It can be rebuilt by running `yarn build` in the dependency's root folder or `yarn bootstrap` from the monorepo root which rebuilds for all packages and is much slower.