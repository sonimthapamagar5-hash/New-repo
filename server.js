const http=require('http')
const app = require('./express')
const server=http.createServer(app)
server.listen(4000,'127.0.0.1', (err)=>{
    if(!err){
        console.log('Message is shown')
    }
})