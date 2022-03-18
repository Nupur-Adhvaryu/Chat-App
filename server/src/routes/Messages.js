const express = require('express');
const router = express.Router()
const Message = require('../models/Messages');
router.get('/', (req, res) => {
  Message.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})

module.exports = router;