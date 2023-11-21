# Communication Contract

## How to programmatically REQUEST data
Request data from your server file as follows:
```JavaScript
const remoteResponse = await fetch('http://localhost:3000/random', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(localResponse),
        });
```
## How to programmatically RECEIVE data
```JavaScript
  const remoteResults = await remoteResponse.json();

        // Send the combined results as the final response
        res.json({ remoteResults });
```

## UML Sequence Diagram
