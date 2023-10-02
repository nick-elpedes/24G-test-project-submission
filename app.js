import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
const __dirname = path.resolve();

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('user disconnected'));
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));