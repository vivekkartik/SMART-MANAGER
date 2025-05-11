
const express = require("express")
const app = express()
const auth = require("./api/auth")
require('./mongo/connection')





app.get('/', (req,res)=>{
    res.send('hello vivek')
})
app.use(express.json())
app.use("/api/v1", auth);

app.listen('1000', ()=>{
    console.log('Server is running on port 1000 vivek')
})
