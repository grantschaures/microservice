const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to generate and return a random number
app.post('/random', (req, res) => {
    console.log("RANDOM NUM ROUTE")
    const n = req.body.randNumMax;

    const randomNumber = Math.floor(Math.random() * n) + 1; // Generate a random number between 1 and n
    res.json({ random_number: randomNumber });
});

// Default route
app.get('/', (req, res) => {
  res.send('Default route');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});