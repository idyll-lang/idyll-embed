const React = require('react');
const ReactDOM = require('react-dom');
const IdyllDocument = require('idyll-document').default;
const IdyllComponents = require('idyll-components');

let components = IdyllComponents;

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