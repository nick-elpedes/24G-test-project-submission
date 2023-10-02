import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
const __dirname = path.resolve();
const colorContainer = {color: '#EF6262', name: 'Red'};

app.use(express.static('public'));

app.get('/controls', (req, res) => res.sendFile(__dirname + '/views/controls.html'));
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

io.on('connection', (socket) => {
  //socket.on('disconnect', () => console.log('user disconnected'));

  // join room corresponding to socket type
  if(socket.handshake.query.type == 'control') {
    // console.log('A controller connected');
    socket.join('control');
  } else if(socket.handshake.query.type == 'display') {
    // console.log('A display connected');
    socket.join('display');
    // when a display socket connects, send it the current color
    socket.emit('color change', colorContainer);
  }

  // when a color is sent from a control socket, send it to the display sockets
  socket.on('color change', (color) => {
    // console.log(color);
    colorContainer.color = color.color;
    colorContainer.name = color.name;
    io.to('display').emit('color change', colorContainer);
  });

});


server.listen(port, () => console.log(`Listening on port ${port}!`));