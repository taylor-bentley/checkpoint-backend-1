const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/OrderController');
const mongoose = require("mongoose");

router.get('/orders', list);
router.get('/order/:id', show);
router.post('/orders', create);

module.exports = router;