const express = require('express');
const router = express.Router()
const Users = require('../models/Users');
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

router.get('/sigup', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})

router.get('/logout', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})



module.exports = router;