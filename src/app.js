const express = require('express')
const path = require('path')
const hbs = require('hbs')

// seting port

const app = express()
const port = process.env.PORT||3000

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')

app.set('view engine','hbs')
app.set('views',viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>{
    console.log("server is set")
})