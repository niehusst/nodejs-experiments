## Addition API Endpoint

```
POST /
```

This API endpoint accepts two numbers in the request body and returns the sum of these two numbers.

### Path Parameters

None

### Request Body

**num1** (Number) *required* - The first number to be added.

**num2** (Number) *required* - The second number to be added.

### Example Request

```javascript
fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    num1: 5,
    num2: 3,
  }),
});
```

### Example Response

```
"The answer to 5 + 3 is: 8"
```

### Response Codes

**200**: The sum of the two numbers will be returned.

**400**: This response code will be returned if either `num1` or `num2` is not provided in the request body.

<br />

