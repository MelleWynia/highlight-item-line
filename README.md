[![Badge: Build status generated from Travis CI](https://api.travis-ci.org/MelleWynia/mark-todo-item.svg?branch=master)](https://travis-ci.org/MelleWynia/mark-todo-item) [![NSP Status](https://nodesecurity.io/orgs/melles-github/projects/41d79145-ac7b-4a56-84f5-be59727c39be/badge)](https://nodesecurity.io/orgs/melles-github/projects/41d79145-ac7b-4a56-84f5-be59727c39be) [![bitHound Overall Score](https://www.bithound.io/github/MelleWynia/mark-todo-item/badges/score.svg)](https://www.bithound.io/github/MelleWynia/mark-todo-item) [![bitHound Dependencies](https://www.bithound.io/github/MelleWynia/mark-todo-item/badges/dependencies.svg)](https://www.bithound.io/github/MelleWynia/mark-todo-item/master/dependencies/npm)



# Mark todo item

Experimental repository to test how it works with NPM.

The code is tested and actually used in production ;)

```
npm install --save mark-todo-item
```

```javascript
const MarkTodoItem = require('mark-todo-item');
const markTodoItem = MarkTodoItem(options);
const input = `/projects/:id – Add filter with search`;
const output = markTodoItem(input);
```

```javascript
import 'todo' from 'mark-todo-item';
```

### Lint

```
eslint ./**/*.js
```
_Note to self: eslint returns nothing in case of no error or warnings!_

### Test

All dependencies can be installed/run globally

```
jasmine
```

```
npm run test // runs jasmine
```

```
jasmine-node --color --autotest ./ --watch ../**
```
