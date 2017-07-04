# yodle
![CircleCI Status](https://circleci.com/gh/bauenlabs/yodle.png?style=shield&circle-token=5655baef3454adc05b34cbd5a5f3a6a10c939a73)

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
This project makes use of [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) and [serverless-offline](https://github.com/dherault/serverless-offline). The following commands are available.

 - `serverless webpack invoke --function funcName`: Invokes the specified function.
 - `serverless webpack watch --function funcName`: Invokes a function and re-invokes when files change.
 - `serverless webpack --out folderName`: Bundles specified functions and spits it into the given dir.
 - `serverless offline start`: Starts a local server on port 3000 that acts like API Gateway.

## Coding Standards
Coding standards will be rigorously enforced on this project. To lint this codebase, run `yarn lint`. There is a pre-commit hook that will run this for you before a commit is formed. This will prevent mal-formed code from being pushed.

## Testing
100% test coverage should be mantained at all times on this project. To run tests and code coverage inspectors, run `yarn test`. There is a pre-commit hook that will run tests for you before a push is performed. This will prevent code that breaks function tests from being pushed.
