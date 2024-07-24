var express = require('express');
var router = express.Router();
const db = require('../connections/firebase_admin_connect');
const { firebase, auth } = require('../connections/firebase_connect')


router.get('/', function (req, res, next) {
    db.ref('list').once('value', (sna) => {
        const userID = req.session.uid;
        res.render('index', {
            title: '六角學院留言板',
            userID,
            errors: req.flash('errors'),
            list: sna.val()
        });
    });
})

/* GET home page. */
module.exports = router;