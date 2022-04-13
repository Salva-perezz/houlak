const express = require('express');
const router = express.Router();
const { getArtist } = require('./controller');

router.get('/', getArtist);

module.exports = router;