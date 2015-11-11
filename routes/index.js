var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      console.log("进入到index.js，进入首页")
      if (!req.cookies.userCookie) {//没有登录时；
            return res.redirect('/login');
      } else {//登录后
            res.render('index');
      }
});

module.exports = router;
