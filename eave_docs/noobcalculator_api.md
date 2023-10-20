## Home Page Endpoint

```
GET /
```

This API endpoint sends the home page (index.html) of the application to the client.

### Path Parameters

No path parameters are required for this endpoint.

### Example Request

```javascript
fetch('/', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

The response will be the HTML content of the index.html file.

### Response Codes

**200**: The home page was successfully retrieved and sent to the client.

**404**: The requested resource could not be found on this server. This could occur if the index.html file does not exist in the specified directory.

<br />

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
})
```

### Example Response

```
"The answer to 5 + 3 is: 8"
```

### Response Codes

**200**: The sum of the two numbers will be returned.

**400**: This response code will be returned if either `num1` or `num2` is not provided in the request body.

<br />

