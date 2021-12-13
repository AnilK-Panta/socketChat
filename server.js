const { socket } = require("socket.io");

const io = require("socket.io")(5000);
io.on("connection", (socket) => {
  socket.emit("chat-message", "Hello World");
});
