const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login');
});

router.post('/create', async (req, res) => {});

module.exports = router;
