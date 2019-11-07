const express =require ('express');
const router = express.Router();
const User = require('../model/user')



router.post("/register",function(req,res){
    const newUser = new User({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password


    })
        User.saveUser(newUser,function(err,user){
            if(err){
                res.json({state:false,msg:"data not inser"})

            }
            if(user){
                res.json({state:true,msg:"data  inser"})

            }

        })
   
})
//



router.post("/login",function(req,res){
   const email = req.body.email;
   const password = req.body.password;

   User.findByEmail(email,function(err,user){
     if(err) throw err;
     if(!user){
         res.json({state:false,msg:"no user found"});
     }
     User.passwordCheck(password,user.password,function(err,match) {
        if(err) throw err;
        if(match){
            
        }
     })
   })
});

module.exports = router;

///////////
///////////