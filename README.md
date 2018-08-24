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

      // This will make all standard components available by default.
      // To add additional components, register them.
      Idyll.registerComponent('ComponentName', Component);

      // Instantiate the Idyll runtime.
      Idyll.render(idyllMarkup, div);
    </script>
  </body>
</html>
```