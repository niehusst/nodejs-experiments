## Home Page Endpoint

```
GET /
```

This API endpoint sends the home page of the website to the client.

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

## Random Quote Generator

```
POST /
```

This API endpoint fetches a random quote from an external API and returns it in a humorous format.

### Path Parameters

None

### Example Request

```javascript
fetch('https://your-api-url.com/', {
  method: 'POST',
})
.then(response => response.json())
.then(data => console.log(data));
```

### Example Response

```json
"yo mamma so stupid that she said: 'The only way to do great work is to love what you do.'"
```

### Response Codes

**200**: The request was successful and a quote was returned.

**500**: An error occurred while fetching the quote.

<br />

