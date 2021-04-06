const express = require('express');


const router = express.Router();
const users = require('./users')



router.get('/', function(request, response){
    response.status(200).send("hello home")
})


router.post("/login", function(request,response){
    const { username, password } = request.body
    
    let user = users.filter(arrayelement => arrayelement.username === username)
    
    if(user.length == 1){
        
        if(user[0].password === password){
            response.send("Login successful")
        }
        response.send("user or password is wrong")
    } else {
        response.send("User does not exit")
    }
})

router.get('/allusers', function(request,response){
    response.status(200).send(users)
})



module.exports = router