const express = require('express');


const router = express.Router();
const usermodel = require('./usermodel')



router.get('/', function(request, response){
    response.status(200).send("hello home")
})


router.post("/login", function(request,response){
    const { firstname, lastname, email, mobileno, username, password } = request.body
    
    // let user = users.filter(arrayelement => arrayelement.username === username)
    
    // if(user.length == 1){
        
    //     if(user[0].password === password){
    //         response.send("Login successful")
    //     }
    //     response.send("user or password is wrong")
    // } else {
    //     response.send("User does not exit")
    // }
})

router.post('/signup', async (request,response) => {
    const { firstname, lastname, email,password } = request.body

    let userModel = new usermodel({firstname, lastname, email, password})

    let responseData =  await userModel.save()

    response.status(200).send({message:"you have successfully signed up. You can login now!!!", data: responseData})
})



module.exports = router