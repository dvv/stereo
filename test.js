var server = require('./')({
  port: 3000,
  repl: true,
  workers: 4
});
if (server) { // worker process
  // HTTP(S) server instance for further tuning
  server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('HELLO FROM WORKER ' + process.pid);
  });
  // inter-workers message arrives
  process.on('message', function(message){
    console.log(JSON.stringify(message));
  });
} else { // master process
  // broadcast a message
  process.publish({sos: 'to all, all, all'});
}
