const {User} = require("../models")

function authenticate(req,res,next){
    const token = req.headers.token
    try{
        User.findByPk(token)
        .then(user=>{
            if(user){
                req.user = user
                next()
            }else{
                res.status(401).json({message:"UNAUTHORIZED"})
            }
        }).catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {authenticate}