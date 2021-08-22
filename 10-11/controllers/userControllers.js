const {User} = require("../models")

class UserController{
    static getAccess(req,res,next){
        const {userId, scope} = req.body
        User.findOne({where:{userId,scope}})
        .then(user=>{
            if(!user){
                res.status(404).json({message:"User Not Found"})
            }
            else{
                if(user.scope != "user"){
                    res.status(401).json({message:"UNAUTHORIZED"})
                }else{
                    const token = user.id
                    res.status(200).json({token})
                }
            }
        }).catch(err=>{
            console.log(err)
        })
        
    }
}   

module.exports = UserController

