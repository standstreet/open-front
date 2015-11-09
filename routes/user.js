var express = require('express');
var router = express.Router();
var ModelProxy, userModel;
ModelProxy = require('./../proxy/DataProxy').DataProxy;
userModel = ModelProxy.create("user.*");

router.post("/", function (req, res) {
    var loginName = req.body.loginName;
    var password = req.body.password;
    console.log(loginName + "/" + password);

    userModel.login({loginName: loginName, password: password}).done(function (data) {
        console.log("µÇÂ½½á¹û£º" + JSON.stringify(data));
        res.send(data);
    }).error(function (err) {
        if (err.code == 'ECONNREFUSED') {
            res.status(err.code).send(err);
        } else if (err.statusCode == 404 || err.statusCode == 500) {
            res.status(err.statusCode).send(err);
        } else {
            var errTip = JSON.parse(err.responseText);
//           console.log(err.responseText);
            res.send(errTip.info);
        }
    });
});
module.exports = router;