import React from 'react';
import ReactDOM from 'react-dom';
import IdyllDocument from 'idyll-document';
import * as IdyllComponents from 'idyll-components';

/**
 * Update this to add your own custom component. For example:
 *
 *  import MyComponent from './my-custom-component.js';
 *
 *  let components = Object.assign({}, IdyllComponents, {
 *    MyComponent: MyComponent
 *  })
 */
 let components = Object.assign({}, IdyllComponents, {
   // put more components here
 });

const Idyll = {
  render: function(markup, container, options = {}) {
    // You must provide idyllMarkup
    // and the container element (a DOM node).
    ReactDOM.render(
      React.createElement(IdyllDocument, {
        markup: markup,
        components: components,
        ...options
      }),
      container
    )
  },
  registerComponent: function(name, value) {
    const newObj = {};
    newObj[name] = value;
    components = Object.assign(components, newObj);
  }
}

window.Idyll = Idyll;