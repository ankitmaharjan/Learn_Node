import events from 'events';
var eventEmitter = new events.EventEmitter();

eventEmitter.on('Woww', function() {
console.log('Voice is detected!');
});
eventEmitter.emit('Woww');