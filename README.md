# counter-up.js
Pure JavaScript counter that counts up. Useful for statistics.

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

See the demo for an example.
