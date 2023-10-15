## Home Page

```
GET /
```

This API endpoint sends the home page of the website.

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

**200**: The home page was successfully retrieved and returned.

**404**: The requested resource could not be found on this server. This could occur if the index.html file is missing or the path is incorrect.

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

