const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights'); 


// All paths start with '/flights'

// GET /flights (index)
router.get('/', flightsCtrl.index);
// GET /flights (new function/action)
router.get('/new', flightsCtrl.new);
// POST /flights (create function/action)
router.post('/', flightsCtrl.create);
// GET /flights/:id (show function/action)
router.get('/:id', flightsCtrl.show);

module.exports = router;

