const socket = io("http://localhost:5000");
socket.on("chat-message", (data) => {
  console.log(data);
});
