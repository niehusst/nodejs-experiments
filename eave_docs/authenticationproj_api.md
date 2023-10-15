## Home Page Render

```
GET /
```

This API endpoint renders the home page of the application.

### Path Parameters

None

### Example Request

```javascript
fetch('/', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data));
```

### Example Response

```
{ 
  "message": "Home page rendered successfully"
}
```

### Response Codes

**200**: This response code will be returned when the home page is successfully rendered.

<br />

## Google Authentication

```
GET /auth/google
```

This API endpoint is used to authenticate users via Google.

### Path Parameters

No path parameters are required for this endpoint.

### Example Request

```javascript
fetch('/auth/google', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
```

### Example Response

The response will depend on the user's Google account and the permissions granted during the authentication process.

### Response Codes

**200**: The request was successful and the user is authenticated.

**401**: Unauthorized. The user is not authenticated.

<br />

## Google Authentication

```
GET /auth/google/secrets
```

This API endpoint is used to authenticate a user with Google. If the authentication is successful, the user is redirected to the '/secrets' page. If the authentication fails, the user is redirected to the '/login' page.

### Path Parameters

None

### Example Request

```javascript
fetch('/auth/google/secrets', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
```

### Example Response

This endpoint does not return a JSON response. It redirects the user to either the '/secrets' page or the '/login' page based on the success or failure of the authentication.

### Response Codes

**302**: This response code will be returned when the user is successfully authenticated and is being redirected to the '/secrets' page.

**401**: This response code will be returned when the user authentication fails and the user is being redirected to the '/login' page.

<br />

