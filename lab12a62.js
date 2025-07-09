// const express = require('express');
// const app = express();

// //it adds the parsed data to req.body.
// //It is only used for incoming requests, not responses.
// app.use(express.json());
// // Global middleware runs for all routes
// app.use((req, res, next) => {
//   console.log('Global Middleware');
//   next();
// });

// // Single middleware 
// app.get('/special', (req, res, next) => {
//   console.log('Middleware running for /special');
//     console.log('Skipping to next route');
//     next('route'); // Skip to the next route  
// });

// //that runs "next('route')" is called
// app.get('/special', (req, res) => {
//   res.send('special route running');
// });

// // Start server
// app.listen(3321, () => {
//   console.log("Server running at http://localhost:3321");
// });













// const express = require('express');
// const path = require('path');
// const app = express();

// // Route to download file
// app.get('/download', (req, res) => {
//   const filePath = path.join(__dirname,'Lab Manual JSF.pdf');
//   res.download(filePath, 'MyDownloadedFile.pdf', (err) => {
//     if (err) {
//       console.error('Download error:', err);
//       res.status(500).send('File could not be downloaded');
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });














//const express = require('express');
// const app = express();

// // This middleware runs for ALL HTTP methods on '/'
// app.all('/', (req, res) => {
//   res.send(`Received a ${req.method} request`);
// });

// app.listen(3321, () => {
//   console.log("Server running at http://localhost:"+30001);
// });