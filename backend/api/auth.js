const router = require("express").Router()
const User = require("../model/mongo-user")


router.post('/register', async (req,res)=>{
    try {
            const {email, username, password} = req.body
            console.log(`user: JSON.stringfy( ${email}, ${username}, ${password})`)
            const user = new User({email, username, password})
            await user.save()
            res.status(200).json({user: user})
            
    } catch (error) {
        res.status(400).json({message: "user already existes ", error})
    }
})

module.exports = router


