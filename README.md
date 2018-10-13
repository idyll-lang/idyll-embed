# idyll-embed
Embed Idyll directly in an HTML page

## Usage

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  </head>
  <body>
    <script src="dist/idyll-embed.min.js"></script>
    <script>
      // Create a new div where Idyll will inject content.
      var div = document.createElement('div');
      document.body.appendChild(div);

      // Get your markup.
      var idyllMarkup = '# Hello World';

      // All standard components are available by default.
      // To add additional components, register them.
      Idyll.registerComponent('ComponentName', Component);

      // Instantiate the Idyll runtime.
      Idyll.render(idyllMarkup, div);
    </script>
  </body>
</html>
```

## How to modify this library for your own needs

1. Clone this repo
2. Run `npm install` to install the dependencies.
3. Edit `index.js` according to your own use-case. See the comments in `index.js` for more info.
4. Rebuild the dist file: `npm run build`
5. Include the newly created JavaScript file (`dist/idyll-embed.min.js`) in your HTML.

