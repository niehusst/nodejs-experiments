## List Items Endpoint

```
GET /
```

This API endpoint retrieves all items from the database and renders them on the page. The day of the week is also included in the response.

### Path Parameters

None

### Example Request

```javascript
fetch('http://localhost:3000/', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data));
```

### Example Response

```json
{
  "listName": null,
  "kindOfDay": "Monday",
  "items": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "This is item 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "This is item 2"
    }
  ]
}
```

### Response Codes

**200**: The request was successful and the items were retrieved from the database.

**500**: An error occurred on the server while trying to retrieve the items from the database.

<br />

## Create Item

```
POST /
```

This API endpoint is used to create a new item and add it to a list. If a list name is provided, the item is added to that list. If no list name is provided, the item is saved to a default list.

### Path Parameters

**newItem** (string) *required* - The name of the new item to be created.

**listName** (string) *optional* - The name of the list to which the new item should be added. If not provided, the item will be added to a default list.

### Example Request

```javascript
fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    newItem: 'Apple',
    listName: 'Groceries',
  }),
});
```

### Example Response

The API does not return a JSON response. Instead, it redirects to the page of the list to which the item was added. If the item was added to the default list, it redirects to the home page.

### Response Codes

**302**: The item was successfully created and added to the specified list, or the default list if no list name was provided. The user is redirected to the page of the list to which the item was added.

<br />

## Delete Item Endpoint

```
POST /delete
```

This API endpoint deletes an item from a specified list or from the default list if no list is specified.

### Path Parameters

**None**

### Request Body

**checkbox** (String) *required* - The ID of the item to be deleted.

**listName** (String) *optional* - The name of the list from which the item should be deleted. If not provided, the item will be deleted from the default list.

### Example Request

```javascript
fetch('/delete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    checkbox: '123',
    listName: 'Groceries',
  }),
});
```

### Example Response

The response will be a redirection to the list page from which the item was deleted. If the item was deleted from the default list, the response will redirect to the home page.

### Response Codes

**200**: The item was successfully deleted and the client is redirected to the appropriate list page.

**500**: An error occurred on the server while attempting to delete the item.

<br />

## Get List

```
GET /:listName
```

This API endpoint retrieves a list by its name. If the list does not exist, it creates a new list with the given name and no items.

### Path Parameters

**listName** (string) *required* - The name of the list to retrieve or create.

### Example Request

```javascript
fetch('/Groceries', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data));
```

### Example Response

```json
{
  "kindOfDay": "Monday",
  "listName": "Groceries",
  "items": []
}
```

Or, if the list already exists:

```json
{
  "kindOfDay": "Monday",
  "listName": "Groceries",
  "items": ["Apples", "Bananas"]
}
```

### Response Codes

**200**: The list was successfully retrieved or created.

**500**: An error occurred on the server while attempting to retrieve or create the list.

<br />

