const express = require('express');
const router = express.Router();
const outletController = require('../controller/outlet');


router.get('', outletController.outlets);

module.exports = router;