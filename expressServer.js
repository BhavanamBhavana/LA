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

app.get('/', function (req, res) {
    res.end('Hello Express!');
});
app.get('/files',function(req,res){
  dir.readFiles("/home/bhavana/WorkSpace/LA", {
      match: /.log$/,
       exclude: ['Changelog']
      }, function(err, content, next) {
          if
           (err) throw err;
          //console.log('content:', content);
          next();
      },
      function(err, files){
          if (err) throw err;
          console.log('finished reading files:',files);
          res.send(files);
      });
})
app.get('/logs/:filename',function(req,res){
  var arr = [];
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(req.params.filename)
  });

  lineReader.on('line', function (line) {
    arr.push(JSON.parse(line))
  });

  lineReader.on('close',function(){
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.send(arr);
  })

});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});
