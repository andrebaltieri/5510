var express = require('express');
var userController = require('../controllers/userController');
var accountController = require('../controllers/accountController');
var auth = require('../security/auth');

var router = express.Router();

router.get('/users', userController.list);
router.post('/users', auth.isAdmin, userController.create);

router.post('/login', accountController.authenticate);

module.exports = router;