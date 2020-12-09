# ember-string-fmt

[![Build Status](https://travis-ci.org/GavinJoyce/ember-string-fmt.svg)](https://travis-ci.org/GavinJoyce/ember-string-fmt)

The string interpolation function formally known as `Ember.String.fmt`.

`Ember.String.fmt` has been depreciated in favor of [ES6 String Templates](http://babeljs.io/docs/learn-es2015/#template-strings) which should be used in most cases. If you construct string templates dynamically, you may find `fmt` useful.

## Installation

`ember install ember-string-fmt`

## Usage

```js
import fmt from "ember-string-fmt";

let name = "Alex";
let greeting = fmt("hi %@", name); //=> 'hi Alex'
```

## Repository Installation

- `git clone` this repository
- `npm install`
- `bower install`

## Running

- `ember server`
- Visit your app at http://localhost:4200.

## Running Tests

- `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Building

- `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
