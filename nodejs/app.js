const EventEmitter = require('events')

const customevent = new EventEmitter()


customevent.on('response' , (name , id)=>{
    console.log(`data recieved user ${name} with id ${id}`)
})
customevent.on('response' , ()=>{
    console.log("some other logic here")
})

customevent.emit('response' , 'john' , 34)