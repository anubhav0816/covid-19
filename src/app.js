const express = require('express')
const path = require('path')
// const hbs = require('hbs')
const cases = require('./utils/covid19')
// seting port

const app = express()
const port = process.env.PORT||3000

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')

app.set('view engine','hbs')
app.set('views',viewsPath)

app.use(express.static(publicDirectoryPath))
  
app.get('',(req,res)=>{
    cases((error,body)=>{
        console.log(body)
    })
    res.render('index')
})


app.listen(port,()=>{
    console.log("server is set")
})