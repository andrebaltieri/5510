var User = require('../models/user').User;
var md5 = require('MD5');

exports.list = function (req, res) {
    User.find({}, function (error, result) {
        if (error) {
            res.status(500).json(error);
            return;
        }
        
        res.status(200).json(result);
    });
};

exports.create = function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = md5(req.body.password + global.SALT_KEY);
    user.admin = req.body.admin;

    user.save(function (error) {
        if (error) {
            res.status(500).json(error);
            return;
        }

        res.status(201).json(user);
    });
};