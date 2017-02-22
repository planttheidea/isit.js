// external dependencies
import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import isit from '../src/_groups';

console.log(isit, Object.keys(isit).length);

const isFoo = (...objects) => {
  return objects.every((object) => {
    return object === 'foo';
  });
};

const isitAllFooStrings = isit.compose.all(isFoo, isit.all.string);

console.log(isitAllFooStrings('foo', 'foo'));
console.log(isitAllFooStrings('foo', 'bar'));
console.log(isitAllFooStrings('bar', 'bar'));

class App extends Component {
  render() {
    return (
      <main>
        <h1>
          App
        </h1>
      </main>
    );
  }
}

const container = document.createElement('div');

container.id = 'app-container';

render((
  <App/>
), container);

document.body.appendChild(container);
