
const express = require("express")
const app = express()
const routes = require("./routes/routes")
require('./mongo/connection')





app.get('/', (req,res)=>{
    res.send('hello vivek')
})
app.use(express.json())

app.use(routes)

app.listen('1000', ()=>{
    console.log('Server is running on port 1000 vivek')
})
