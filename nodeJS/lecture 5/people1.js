const event = require('events')

class myEmitter extends event {
    startConnection() {
        console.log('class started');
    
        //raise an event
        setTimeout(() => {
            this.emit('serverConnect', {
                server1: 'serverOne',
                server2: 'serverTwo',
                server3: 'serverThree'
            });
        }, 2000);
    }
}

module.exports = myEmitter;