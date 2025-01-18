const config=require('./config/localhost')
Object.keys(config).forEach(key=>{
    process.env[key]=config[key]
})

let http=require('http')
let port=process.env.port || 3001
let app=require('./app')
let server=http.createServer(app)
server.listen(port,()=>{
    console.log('http://localhost:'+port)
})
app.set('port',port)