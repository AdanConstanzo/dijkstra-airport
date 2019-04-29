// our index so we are going to link everything together
// with this file
var router = require('express').Router();

// links our routers to the server.js
router.use(require('./airports'));

module.exports = router;