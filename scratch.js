// import server tools
const http = require('http');

// make a server
const server = http.createServer((req, res) => {

// To examine the contents of the Request object,
// 1) Log the 'req' parameter in the createServer function
// 2) Make any request to http://localhost:5000 using your browser or Postman
// console.log(req);

// console.log(res);

// To read a data packet and add to the body of the request in http, you have to
// listen for the data event on the req object. The data event will be triggered
// whenever a data packet is received. Then, you need to add the contents of the
// data packet to the content compiled from data packets that were already received.

// Call the req.on method to listen to the data event. Concatenate the data received
// to a string representing the body of the request getting put together.
let reqBody = '';
req.on('data', (data) => {
    reqBody += data;
})
// The end event on the request object will be triggered once the entire server
// finishes receiving the request body. You can log the entire request body inside
// of the req.on method listening to the end event.
req.on('end', () => {
    // console.log(reqBody);
})

res.write('Hello');
res.write(' ');
res.write('World');
res.write('!');

// res.status = 200;

return res.end('!!');


// closing server tag
});

const port = 5001;


server.listen(port, () => console.log('Server is listening on port', port));
