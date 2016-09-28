# counter-up.js
Pure JavaScript counter that counts up. Useful for statistics.

See the [demo](https://brandrevive.github.io/counter-up.js/demo/) for an example.

## Usage
```javascript
statCounter(statElement, statData, speed);
```
### Example
```html
<script src="counter-up.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {

    statCounter('stats', [
      { label: 'Cities',  amount: 9  },
      { label: 'Hackers', amount: 50 },
      { label: 'Pizzas',  amount: 99 },
    ], 200);

  });
</script>
```

You can also install this through [npm](https://www.npmjs.com/package/counter-up.js).
```
$ npm install --save counter-up.js
```
