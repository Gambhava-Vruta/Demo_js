# middleware
### "Middleware in Express.js is a function that runs between the request and the response. It has access to the request (req), response (res), and the next() function, which passes control to the next middleware.
## Why Use Middleware?
#### ->To execute code before sending a response

#### ->To handle logging, authentication, validation

#### ->To serve static files, handle errors, or modify request data
## 📄 Example Code

```js
const express = require('express');
const app = express();

// it adds the parsed data to req.body.
// It is only used for incoming requests, not responses.
app.use(express.json());

// Global middleware runs for all routes
app.use((req, res, next) => {
  console.log('Global Middleware');
  next();
});


// Single middleware
app.get('/good', (req, res, next) => {
  console.log('Middleware running for /good');
  console.log('Skipping to next route');
  next('route'); // Skip to the next route
});

// This route runs when "next('route')" is called
app.get('/good', (req, res) => {
  res.send('good route running');
});

// Start server
app.listen(3321, () => {
  console.log("Server running at http://localhost:3321");
});
```

## 📄 other Example Code

```js
 const express = require('express');
 const app = express();
// This middleware runs for ALL HTTP methods on '/'
 app.all('/', (req, res) => {
   res.send(`Received a ${req.method} request`);
 });
```
## 📂 Static Middleware (`express.static()`)

`express.static()` is a built-in middleware function in Express used to serve static assets such as:

- HTML files
- CSS stylesheets
- JavaScript files
- Images
- PDFs, and more

It allows you to expose a folder in your project to be accessed directly by the browser.## 📄 Example Code

```js
const express = require('express');
const app = express();

app.use(express.static('example'));

app.listen(3220, () => {
  console.log('Server running at http://localhost:3220');
});
