const express = require('express');
const router = express.Router()
const User = require('../models/Users');
router.get('/', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})
router.get('/login', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})

router.post('/sigup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const profileimgurl = req.body.profileimgurl;
  
  User.findOne({email:email})
    .then(user=>{
      if(user){
        res.status(409).json({Error:"The email provided is already registered."})
      }else{
        var newUser = new User({
          username,
          password,
          email,
          firstname,
          lastname,
          profileimgurl
        })
        newUser.save()
            .then(()=>{
                res.status(201).json({"Message":"Registered Successfully"});
                })
            .catch(e=>res.status(400).json({"Error":e}));
      }
    })
    .catch(err=>res.status(404).json({Error:err}));
})

router.get('/logout', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})



module.exports = router;