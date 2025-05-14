const router = require('express').Router()
const List = require('../model/mongo-list')


router.post('/list', async (req, res) =>{
    try{
        const {title, body, user } = req.body
        const list = new List({title, body})    
        await list.save()
        res.status(200).json({list: list})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router