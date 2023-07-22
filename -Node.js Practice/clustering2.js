const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers based on the number of CPUs
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Create the server
  const server = http.createServer((req, res) => {
    if (req.url === '/heavy-workload') {
      // Simulate heavy workload for '/heavy-workload' endpoint
      console.log(process.pid, 'heavy')
      performHeavyWorkload(req, res);

    } else {
      // Default behavior for other endpoints
      console.log(process.pid, 'lite    ')
      res.writeHead(200);
      res.end('Hello World\n');
    }
  });

  // Listen on port 8000
  server.listen(8000);

  console.log(`Worker ${process.pid} started`);
}

// Function to simulate heavy workload
function performHeavyWorkload(req, res) {
  // Perform your heavy workload logic here
  // This is just an example delaying the response by 5 seconds
  setTimeout(() => {
    res.writeHead(200);
    res.end('Heavy Workload Completed\n');
  }, 5000);
}
