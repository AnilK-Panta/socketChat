const socket = io("http://localhost:8000");

const form = document.getElementById("message-send-Container");
const messageInput = document.getElementById("typeMsg");
const messageContainer = document.querySelector(".message-Wrap");

const name = prompt("Enter your name");
socket.emit("new-user-joined", name);
