// create socket connection and tell the server that this socket is for a display
var socket = io({
  query: {
    type: "display",
  },
});

// when the socket connects, log it
/* socket.on("connect", () => {
  console.log("connected");
}); */

// when a color is sent to a display socket, update the display with the new color and name
socket.on("color change", (color) => {
  //console.log(color);
  document.getElementById("display").style.backgroundColor = color.color;
  document.getElementById("display").innerHTML = color.name;
});
