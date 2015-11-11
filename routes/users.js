var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var ModelProxy, userModel;
ModelProxy = require('./../proxy/DataProxy').DataProxy;
userModel = ModelProxy.create("user.*");

var secret='pass';
//加密
function encrypt(str) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}
//解密
function decrypt(str) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
//获取客户端真是ip;
function getClientIp(req) {
    var ipAddress;
    var forwardedIpsStr = req.headers['X-Forwarded-For'];
    if (forwardedIpsStr) {
        var forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
}




/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("login");
});

//处理登陆；
router.post("/",function(req,res,next){
    var user=req.body.user;
    console.log(user.loginName + "/" + user.password);

    userModel.login({loginName: user.loginName, password: user.password}).done(function (data) {
        console.log("登陆成功结果：" + JSON.stringify(data));
        res.send(data);
    }).error(function (err) {
//        if (err.code == 'ECONNREFUSED') {
//            res.status(err.code).send(err);
//        } else if (err.statusCode == 404 || err.statusCode == 500) {
//            res.status(err.statusCode).send(err);
//        } else {
//            var errTip = JSON.parse(err.responseText);
////           console.log(err.responseText);
            console.log("users.js->router.post登录error:"+err)
            res.send(err);
        //}
    });
    //var user=req.body.user;
    //var msg={
    //    "status":"",
    //    "msg":""
    //}
    //console.log("routers/user.js->处理登陆的router.post:");
    //if(user.loginName=="admin"&&user.password=="admin"){
    //    msg={
    //        "status":"200",
    //        "msg":"登陆成功！"
    //    }
    //    var result=encrypt(JSON.stringify(user));
    //    console.log("routers/user.js->处理登陆的router.post->result:"+result);
    //    msg.result=result;
    //    res.send(msg);
    //}else{
    //    msg={
    //        "status":"400",
    //        "msg":"用户名或密码错误！"
    //    }
    //    console.log("users.js->登陆失败:"+JSON.stringify(msg));
    //    res.send(msg)
    //}

})

module.exports = router;
