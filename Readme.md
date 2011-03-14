
# Stereo

 [Stereo](https://github.com/dvv/stereo) is a simple multi-core server manager for [node.js](http://nodejs.org).
 Inspired by multi-node/spark/cluster.

## Example

server.js:

    var server = require('stereo')({
      port: 3000,
      repl: true,
      workers: 4
    });
    if (server) { // worker process
      // HTTP(S) server instance for further tuning
      server.on('request', function(req, res){...});
      // inter-workers message arrives
      process.on('message', function(message){...});
    } else { // master process
      // broadcast a message
      process.publish({sos: 'to all, all, all'});
    }

## Authors

  * Vladimir Dronnikov

## License 

(The MIT License)

Copyright (c) 2011 Vladimir Dronnikov &lt;dronnikov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.