// create socket connection and tell the server that this socket is for a display
var socket = io({
  query: {
    type: "control",
  },
});

// when the socket connects, log it
/* socket.on("connect", () => {
  console.log("connected");
}); */

// when the document is loaded, bind event handlers to the divs
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("red").addEventListener("click", () => {
    socket.emit("color change", { color: "#EF6262", name: "Red" });
  });
  document.getElementById("blue").addEventListener("click", () => {
    socket.emit("color change", { color: "#468B97", name: "Blue" });
  });
  document.getElementById("yellow").addEventListener("click", () => {
    socket.emit("color change", { color: "#F3AA60", name: "Yellow" });
  });
});
