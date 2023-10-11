## Home Page Endpoint

```
GET /
```

This API endpoint returns a simple string message when accessed.

### Path Parameters

None

### Example Request

```javascript
fetch('http://localhost:3000/', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

```
"hllo worleld spaghetti"
```

### Response Codes

**200**: This response code will be returned when the request is successful.

<br />

## Contact Endpoint

```
GET /contact
```

This API endpoint returns a string message when accessed.

### Path Parameters

No path parameters are required for this endpoint.

### Example Request

```javascript
fetch('/contact', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

```
"find my ass in your butt"
```

### Response Codes

**200**: This response code will be returned when the request is successful.

<br />

## About Endpoint

```
GET /about
```

This API endpoint returns a string message when accessed.

### Path Parameters

No path parameters are required for this endpoint.

### Example Request

```javascript
fetch('/about', {
  method: 'GET',
})
.then(response => response.text())
.then(data => console.log(data));
```

### Example Response

```
"fuck you, im my buisness"
```

### Response Codes

**200**: This response code will be returned when the request is successful.

<br />

