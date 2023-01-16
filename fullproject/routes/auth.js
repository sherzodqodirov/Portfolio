const {Router}=require("express")
const User=require('../models/User')

const router=Router()

router.post('/api/registration',async (req,res)=>{
    try {
        const {email, password}=req.body
        const isUsed= await User.findOne({email})

        if (isUsed){
            return res.status(300).json({message:"Данный Email уже занят"})
        }

        const user=new User({ email,password})
        await user.save()

        res.status(201).json({message:"Пользовател создан"})

    } catch (e) {
        console.log(e)
    }
})
module.exports=router;