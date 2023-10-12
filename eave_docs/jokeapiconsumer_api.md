## Home Page Endpoint

```
GET /
```

This API endpoint sends the home page (index.html) of the application.

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

**404**: The index.html file could not be found in the server directory.

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

