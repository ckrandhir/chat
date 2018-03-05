/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-02 18:43:17 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-05 13:07:06
 */
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;

// console.log(__dirname + '../public');
// console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
//Chandan
server.listen(port, () => {

    console.log('Server is up at 3000');

})