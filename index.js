let express=require('express')
let path=require('path')
let app=express()
let logger=require('morgan')
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'css')))
app.use('/',require('./router/index'))
app.use(logger('dev'))

module.exports=app