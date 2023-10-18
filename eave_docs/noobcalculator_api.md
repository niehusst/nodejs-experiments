## Home Page Endpoint

```
GET /
```

This API endpoint sends the home page of the website to the client.

### Path Parameters

No path parameters are required for this endpoint.

### Example Request

```javascript
fetch('http://localhost:3000/', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

The response will be the HTML content of the home page.

### Response Codes

**200**: The home page was successfully retrieved and sent to the client.

**404**: The home page could not be found. This could occur if there is an issue with the server's file system.

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
});
```

### Example Response

```
"The answer to 5 + 3 is: 8"
```

### Response Codes

**200**: The sum of the two numbers will be returned.

**400**: This response code will be returned if the request body does not contain num1 and num2, or if they are not numbers.

<br />

