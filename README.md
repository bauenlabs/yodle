# yodle
Yodle is a JSON API for interacting with Echo's cache 👹

## Project Structure
Because this project contains a number of serverless functions, it has been structured to be able to share dependencies, build tools, and development tools amongst all services. This codebase is structured like this:

 - `package.json`: Main npm module, responsible for managing all dependencies.
 - `webpack.config.js`: Passed to all serverless functions as the webpack config file.
 - `default.serverless.yml`: Default serverless config file that pulls in webpack.
 - `services/{service_name}`: Individual services. Top level `node_modules` synced into each service.

As noted in the list above, each service should contain a `serverless.yml` file based off of the `default.serverless.yml` file in the root of this codebase. Additionally, the `node_modules` directory should be synced from the root of this codebase into the root of each service. This allows for dependencies to be managed for all services in one place and avoid the use of different versions in different services.

## Dependencies
 - [nvm](https://github.com/creationix/nvm).
 - Node v6.10.2: `nvm install 6.10.2 ; nvm alias default 6.10.2`.
 - Yarn: `npm install -g yarn`.
 - Serverless: `yarn add -global serverless`.

## Installation
In the root of this repository, run `yarn`.

## Development
This project makes use of [serverless-webpack](https://github.com/elastic-coders/serverless-webpack), therefore the build/dev tools in that project are available within this one. Within a service, you can do any of the following:

 - `serverless webpack invoke --function funcName`: Invokes the specified function.
 - `serverless webpack watch --function funcName`: Invokes a function and re-invokes when files change.
 - `serverless webpack --out folderName`: Bundles specified functions and spits it into the given dir.
 - `serverless webpack serve`: Starts a local server on por 8000 that acts like API Gateway.

## Coding Standards
Coding standards will be rigorously enforced on this project. To lint this codebase, run `yarn lint`.
