const router = require("express").Router()
const User = require("../model/mongo-user")
const bcrypt =  require("bcryptjs")


router.post('/register', async (req,res)=>{
    try {
            const {email, username, password} = req.body
            console.log(`user: JSON.stringfy( ${email}, ${username}, ${password})`)
            const hashPassword = await bcrypt.hashSync(password)
            console.log(`user: JSON.stringfy( ${email}, ${username}, ${hashPassword})`)
            const user = new User({email, username, password:hashPassword})
            await user.save()
            res.status(200).json({user: user})
            
    } catch (error) {
        res.status(400).json({message: "user already existes ", error})
    }
})

router.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({$or: [{email: req.body.emailOrUsername},{ username: req.body.emailOrUsername}]})
        res.status(200).json({user: user})
    } catch (error) {
        res.status(400).json({message: "user not found", error})
    }
})

module.exports = router


