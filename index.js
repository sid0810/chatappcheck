var express = require("express");
var app = express();
app.set('views',__dirname + '/views');
app.set('view engine', "jade");
app.engine('jade',require('jade')._express);
app.get("/",function(req,res){
res.render("page");
});
app.use(express.static( __dirname + '/public'));
var io = require('socket.io').listen(app);
io.sockets.on('connection',function (socket) {
socket.emit('message', { message: 'welcome to the chat'});
socket.on('send', function (data){
io.sockets.emit('message', data);
});
});
app.listen(3700);
console.log("Listening on port"+port);

