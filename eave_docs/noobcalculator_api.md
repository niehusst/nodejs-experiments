## Home Page

```
GET /
```

This API endpoint sends the home page of the website.

### Path Parameters

None

### Example Request

```javascript
fetch('/', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to our website!</h1>
</body>
</html>
```

### Response Codes

**200**: This response code will be returned when the home page is successfully retrieved.

<br />

## Addition API Endpoint

```
POST /
```

This API endpoint performs addition operation on two numbers provided in the request body.

### Path Parameters

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
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

```
"The answer to 5 + 3 is: 8"
```

### Response Codes

**200**: This response code will be returned when the addition operation is successful.

**400**: This response code will be returned when the required parameters are not provided in the request body.

<br />

