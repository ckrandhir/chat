/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-02 18:43:17 
 * @Last Modified by: Chandan Kumar
 * @Last Modified time: 2018-03-02 19:47:33
 */
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname + '../public');

// console.log(__dirname + '../public');
console.log(publicPath);

var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {

    console.log('Server is up at 3000');

})