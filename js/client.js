const socket = io("http://localhost:8000");

const form = document.getElementById("message-send-Container");
const messageInput = document.getElementById("typeMsg");
const messageContainer = document.querySelector(".message-Wrap");

function append(message, position) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message-container");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
}

const name = prompt("Enter your name");
socket.emit("new-user-joined", name);

console.log("name");
socket.on("user-joined", (data) => {
  append(`${data} joined the chat`, "left");
  console.log(data);
});
