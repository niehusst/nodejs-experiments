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

None

### Example Request

```javascript
fetch('/auth/google', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data));
```

### Example Response

The response will be dependent on the user's Google profile and the passport.js middleware.

### Response Codes

**200**: Successful authentication

**401**: Unauthorized, when the authentication fails.

<br />

## Google Authentication Endpoint

```
GET /auth/google/secrets
```

This API endpoint is used to authenticate users via Google. If the authentication is successful, the user is redirected to the '/secrets' page. If the authentication fails, the user is redirected to the '/login' page.

### Path Parameters

No path parameters are required for this endpoint.

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

The response will be a redirection to either the '/secrets' page or the '/login' page, depending on the success of the authentication.

### Response Codes

**302**: This response code will be returned after successful authentication, redirecting the user to the '/secrets' page.

**401**: This response code will be returned if the authentication fails, redirecting the user to the '/login' page.

<br />

