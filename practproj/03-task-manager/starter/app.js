const express = require('express')
const tasks = require('./routers/tasks')
const app=express()
const port = 3000
const connectdb =require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.use('/api/v1/tasks' ,tasks)

app.get('/hello',(req , res)=>{
    res.send('hello world')
})

const start= async()=>{
    try{
        await connectdb(process.env.MONGO_URL)
        app.listen(port , ()=>{
            console.log(`server is listening on port ${port}... `)
        })

    }catch(err){
        console.log(err)
    }
}

start()