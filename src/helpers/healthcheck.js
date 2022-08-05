const express = require('express')
const router = express.Router()

// GET listing
router.get('/healthcheck', (req, res) => {
  res.send('ok')
})

module.exports = router
