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

