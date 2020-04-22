const express = require('express')
const path = require('path')
// const hbs = require('hbs')
const cases = require('./utils/covid19')
const stateCase = require('./utils/covid-19-state')


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
app.get('/cases',(req,res)=>{
    const state=req.query.search
    if(state){
    stateCase(state,(err,datas)=>{
        res.send(datas)
    })}
    else{
    cases((err,data)=>{
    res.send(data)
    })}
})

// app.get('http://localhost:3000/?search=',(req,res)=>{
//     const state=req.query.search
//     stateCase('state',(err,datas)=>{
//         // console.log('data')
//         res.send(datas)
//     })
// })


app.listen(port,()=>{
    console.log("server is set")
})  