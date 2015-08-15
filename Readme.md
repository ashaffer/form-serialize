# form-serialize

Serialize a form to JSON.  Inspired heavily by dominicbarnes/form-serialize, but works with npm and doesn't natively include a `transform` function.

## Usage

```javascript
serialize(form) == // {username: 'user1', password: 'my password'}
```

```html
<input name='username'>
<input name='password'>
```

For nested object/array fields, refer to dominicbarnes/square for how to accomplish that.

