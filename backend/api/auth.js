const router = require("express").Router();
const User = require("../model/mongo-user");
const bcrypt =  require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");
const { authMiddleware } = require("./helpers");

router.post("/register", async (req,res)=>{
  try {
    const {email, username, password} = req.body;
    console.log(`user: JSON.stringfy( ${email}, ${username}, ${password})`);
    const hashPassword = await bcrypt.hashSync(password);
    console.log(`user: JSON.stringfy( ${email}, ${username}, ${hashPassword})`);
    const user = new User({email, username, password:hashPassword});
    await user.save();
    const token = jwt.sign({userId: user._id, emailId: user.email}, config.JWT_SECRET,    {
      expiresIn: "2mins"
    });
    res.status(200).json({user: user, token: token});
            
  } catch (error) {
    res.status(400).json({message: "user already existes ", error});
  }
});

router.post("/login", async (req,res)=>{
  try {
    const user = await User.findOne({$or: [{email: req.body.emailOrUsername},{ username: req.body.emailOrUsername}]});
    console.log("user", user);
    if(!user) return res.status(400).json({message: "user not found"});
    const IsPassword = await bcrypt.compareSync(req.body.password, user.password);
    if(!IsPassword) return res.status(400).json({message: "password is incorrect"});

    const { password, ...userData} = user._doc;
    const token = jwt.sign({userId: user._id, emailId: user.email}, config.JWT_SECRET,    {
      expiresIn: "2mins"
    });
    console.log("jwt token", token);
    res.status(200).json({user: userData, token: token});
  } catch (error) {
    res.status(400).json({message: "user not found", error});
  }
});

router.get("/getUser", authMiddleware, async (req,res)=>{
  try {
    const user = await User.findById(req.userId).select("-password");
    if(!user) return res.status(400).json({message: "user not found"});
    res.status(200).json({user: user});
  } catch (error) {
    res.status(400).json({message: "user not found", error});
  }
});

module.exports = router;

