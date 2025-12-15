const express = require('express');

const router = express.Router();
const helloWorldRouter = require('./hello-world');

router.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    version: '1.0.0',
  });
});

router.use('/hello-world', helloWorldRouter);

module.exports = router;
