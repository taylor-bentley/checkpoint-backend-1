const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/MessageController');
const mongoose = require("mongoose");

router.get('/messages', list);
router.get('/message/:id', show);
router.post('/messages', create);

module.exports = router;