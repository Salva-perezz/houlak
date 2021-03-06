const express = require('express');
const router = express.Router();
const artistNetwork = require('./artist/network');

router.use('/artist', artistNetwork);

module.exports = router;