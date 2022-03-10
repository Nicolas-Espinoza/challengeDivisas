const express = require('express');
const controller = require('../controllers/pairs.controller');

const router = express.Router();

router.route('/getPairs').get(controller.getPairs);

module.exports = router;