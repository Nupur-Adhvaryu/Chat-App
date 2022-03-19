const express = require('express');
const router = express.Router()
const Messages = require('../models/Messages');
router.route('/').get((req, res) => {
  Messages.find()
  .then(messages=>res.json({"Messages":messages}))
  .catch(err=>res.json({"Message":"Could not fetch meessages."}))
})

module.exports = router;