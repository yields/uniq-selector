
# uniq-selector

  generate a uniq selector of the given element.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/uniq-selector

## API

#### uniq(el)

this will continue recursively through the element parents until
it reaches an id or `<body>`.

see example below.

## Example

```html
<i>
  <i id="foo" class="foo button">
    <i>
      <i>
        <i class="baz"></i>
      </i>
    </i>
  </i>
</i>
```

```js
var uniq = require('uniq-selector');
var el = document.querySelector('.baz');
uniq(el);
// => i#foo.foo.button:nth-child(1) > i:nth-child(1) > i:nth-child(1) > i.baz:nth-child(1)
```

## Tests

  ```bash
  ~ make test
  ```

## notes

if you are interested in this component, please add more tests cases, it's super easy!

## License

  MIT
