var express = require('express');
var router = express.Router();
const db = require('../connections/firebase_admin_connect');


router.get('/', function (req, res) {
    db.ref('users/'+req.session.uid).once('value',(sna)=>{
        const nickname = sna.val().nickname;
        res.render('users', { title: '會員專區', nickname});
    });
});
module.exports = router; 