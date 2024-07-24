var express = require('express');
var router = express.Router();
const {auth} = require('../connections/firebase_connect');


router.get('/', function (req, res) {
    res.render('login', { title: '登入'});
})
router.post('/', function (req, res) {
    const email = req.body.email;
    const passwd = req.body.passwd;

    auth.signInWithEmailAndPassword(email,passwd)
    .then((userCredential)=>{
        const user = userCredential.user;
        req.session.uid = user.uid;
        res.redirect('/')
    })
    .catch((error)=>{
        res.redirect('/')
    })
});

module.exports = router;