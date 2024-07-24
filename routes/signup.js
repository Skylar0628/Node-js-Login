var express = require('express');
var router = express.Router();
const {auth} = require('../connections/firebase_connect')
const firebaseDB = require('../connections/firebase_admin_connect');
router.get('/', function (req, res) {
    res.render('signup', { title: '註冊', error: req.flash('error')});
})

router.post('/', function (req, res) {
    const email = req.body.email;
    const passwd = req.body.passwd;
    const nickname = req.body.nickname;

    auth.createUserWithEmailAndPassword(email,passwd)
    .then((userCredential)=>{
       const user = userCredential.user
       const savedate = {
        "email": email,
        "nickname": nickname,
        "uid": user.uid
       }
       firebaseDB.ref('/users/' + user.uid).set(savedate);
    res.redirect('/signup/success');
    })
    .catch((err)=>{
        const errMessage = err.message
        req.flash('error', errMessage); // 使用 req.flash 存储错误消息
        res.redirect('/signup');
    })

});


router.get('/success',function(req,res){
    res.render('success',{
        title:'註冊成功'
    });
})
module.exports = router;