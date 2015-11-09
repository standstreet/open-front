var express = require('express');
var router = express.Router();
var ModelProxy, normalModel;
ModelProxy = require('./../proxy/DataProxy').DataProxy;
normalModel = ModelProxy.create("normal.*");

//获取普通移动应用下的应用列表--分页；
router.get("/",function(req,res){
   var uuid=req.query.uuid;
    var page=req.query.page;
    var pageSize=req.query.pageSize;
    console.log("req.body.uuid="+req.query.uuid);
    console.log(page+"/"+pageSize);

   normalModel.appList({uuid:uuid,page:page,pageSize:pageSize}).done(function(data){
       console.log("移动应用列表："+JSON.stringify(data));
       res.send(data);
   }).error(function(err){
       if(err.code=='ECONNREFUSED'){
           res.status(err.code).send(err);
       }else if(err.statusCode==404||err.statusCode==500){
           res.status(err.statusCode).send(err);
       }else{
           var errTip=JSON.parse(err.responseText);
//           console.log(err.responseText);
           res.send(errTip.info);
       }
   });
});
module.exports=router;