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

The response will be the rendered HTML of the home page.

### Response Codes

**200**: The home page was successfully rendered.

**500**: An error occurred on the server while trying to render the home page.

<br />

## Google Authentication

```
GET /auth/google
```

This API endpoint is used to authenticate users via Google using Passport.js.

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

The response will be a redirect to the Google login page.

### Response Codes

**302**: This response code will be returned after successful redirection to the Google login page.

**401**: This response code will be returned if there is an unauthorized request.

<br />

## Google Authentication Redirect

```
GET /auth/google/secrets
```

This API endpoint is used to authenticate a user with Google and then redirect them to the secrets page. If the authentication fails, the user is redirected to the login page.

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

This endpoint does not return a JSON response. Instead, it redirects the user to either the secrets page or the login page, depending on whether the authentication was successful.

### Response Codes

**302**: This response code will be returned when the user is successfully authenticated and is being redirected to the secrets page.

**401**: This response code will be returned when the user fails to authenticate and is being redirected to the login page.

<br />

