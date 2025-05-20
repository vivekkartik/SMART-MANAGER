const router = require('express').Router()
const List = require('../model/mongo-list')
const User = require('../model/mongo-user')

router.post('/addList', async (req, res) =>{
    try{
        const {title, body, email } = req.body
        const isUser = await User.findOne({email})
        console.log('user', isUser)
        if(!isUser.email === email){res.status(400).json({message: "user does not exist's"})}
        if(isUser){

            const list = new List({title, body, user: isUser})    
            await list.save()
            isUser.list.push(list)
            isUser.save()
            res.status(200).json({list: list})
        }
    }
    catch(error){
        res.status(400).json("Error:", error)
    }
})


router.put("/updatelist/:id", async(req,res) =>{
    try{
      
        const { title, body, email} = req.body
        
        const isUser = await User.findOne({email})
        console.log(isUser)
        if(isUser){
            const list = await List.findByIdAndUpdate(req.params.id,{title, body})
             list.save().then(()=>{ res.status(200).json("list updated")})
            
        }
    } catch(error){
        res.status(400).json({ERROR: error})
    }

})

router.delete("/deletetask/:id", async (req, res)=>{
    try{
        const {email} = req.body
        const isUser = await User.findOneAndUpdate({ email},{$pull:{list: req.params.id}})
    
        if(isUser){

            await List.findByIdAndDelete(req.params.id).then(res.status(200).json("list deleted"))
            
        }else{
            res.status(400).json("user not found")
        }
    }
    catch(error){
        res.status(400).json(error)
    }
})




module.exports = router