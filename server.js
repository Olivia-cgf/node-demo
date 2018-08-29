/**var http = require('http');

//像createServer函数传递一个匿名函数
http.createServer(function(request, response){
    console.log("Request received.");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world');
    response.end();
}).listen(8888)**/

/*var http = require("http");

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(8810);

console.log("Server has started.")
// 当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。那是因为大部分浏览器都会在你访问 
// http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico*/


/*var http = require("http");
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname +"received");

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world');
        response.end();
    }

    http.createServer(onRequest).listen(8810);

    console.log("Server has started.")
}


exports.start = start;*/

// var http = require("http");
// var url = require("url");

// function start(route, handle) {
//   function onRequest(request, response) {
//     var postData = "";
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     request.setEncoding("utf8");

//     request.addListener("data", function(postDataChunk) {
//       postData += postDataChunk;
//       console.log("Received POST data chunk '"+
//       postDataChunk + "'.");
//     });

//     request.addListener("end", function() {
//       route(handle, pathname, response, postData);
//     });

//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;