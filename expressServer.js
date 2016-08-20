var express = require('express');
var logger = require('morgan');
const fs = require('fs');
var customMiddleware = require('./customMiddleware.js');
var dir = require('node-dir');
// console.log(customMiddleware);
var app = express();
var port = 7770;

  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
  });

//  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.use(customMiddleware);

// Respond to GET request on the root route (/), the application’s home page
<<<<<<< HEAD

=======
var arr = [];
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
app.get('/', function (req, res) {
    res.end('Hello Express!');
});
app.get('/files',function(req,res){
<<<<<<< HEAD
  dir.readFiles("/home/bhavana/WorkSpace/LA", {
=======
  dir.readFiles("/home/osgdev/workspace/la", {
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
      match: /.log$/,
       exclude: ['Changelog']
      }, function(err, content, next) {
          if
           (err) throw err;
<<<<<<< HEAD
          //console.log('content:', content);
=======
          console.log('content:', content);
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
          next();
      },
      function(err, files){
          if (err) throw err;
          console.log('finished reading files:',files);
          res.send(files);
      });
})
app.get('/logs/:filename',function(req,res){
<<<<<<< HEAD
  var arr = [];
=======
  // arr = [];
  console.log("urrrrrrrrrrrl",req.params.filename);
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(req.params.filename)
  });

  lineReader.on('line', function (line) {
    arr.push(JSON.parse(line))
  });

  lineReader.on('close',function(){
    res.setHeader("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD

=======
  
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
    res.send(arr);
  })

});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});
