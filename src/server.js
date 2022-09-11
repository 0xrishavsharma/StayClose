// const express = require("express");
// const app = express(); //Creating a App variable to call the express server we created
// const server = require('http').Server(app);  //Creating another server to be used with socket.io
// const io = require("socket.io")(server)

// server.listen(8001)
// The video chats doesn't really communicate through a server. It actually communicate with person's computer.
// So, we don't need to worry about sending out traffic through the server.
// Server is purely used for setting up our rooms.