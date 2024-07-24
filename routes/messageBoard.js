var express = require('express');
var router = express.Router();
const db = require('../connections/firebase_admin_connect');
var { body, validationResult } = require('express-validator');



router.post('/',
    body('content').notEmpty().withMessage('內容不得為空值'),
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            req.flash('errors', errors.array()[0].msg);
            res.redirect('/');
        } else {
            db.ref('users/' + req.session.uid).once('value', (sna) => {
                const nickname = sna.val().nickname;
                const list = db.ref('list').push();
                const listDate = {
                    "nickname": nickname,
                    "content": req.body.content
                }
                list.set(listDate);
                res.redirect('/');
            })
        }
});
module.exports = router;