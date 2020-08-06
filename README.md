# transform-errors
Concatenate all error strings from an error object returned by a REST API.

## Using `transform-errors`

### Incorporating it into your project

To utilize the `transform-errors` function, include the file in your js using:
```javascript
const transformErrors = require('./transform-errors');
```

### Calling the function

The function `transformErrors` is a single function that can accept multiple arguments depending on how you want the result to be structured. If you want a completely flattened structure, you can call `transformErrors` with just the error object returned from the API:
```javascript
const result = transformErrors(errors);
```

If you would like to keep the nested structure for specific keys, you can simply add them as additional parameters:

```javascript
const result = transformErrors(errors,"url","urls");
```

This would return a flattened structure for all keys except the ones provided in the function call (`"url"` and `"urls"`);


## Requirements

- This project uses `Node v8.4.0`. 
- Also, see [REQUIREMENTS.md](./REQUIREMENTS.md)

## Installation

To install, first clone the git reposity. Then in the project directory, run: `npm install`

## Available scripts

In the project directory you can run:

`npm test`
- Launches the test runner. This package uses mocha for testing.