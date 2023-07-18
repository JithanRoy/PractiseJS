const connectionStablish = require('./people1');

const myEmitter = new connectionStablish();


myEmitter.on('serverConnect', ({ server1, server2, server3 }) => {
    console.log(`server connection established which is ${server1} and ${server2} and ${server3}`);
})


myEmitter.startConnection(); 
