function noCount(){
    swal("","该功能尚未开放，敬请期待！","warning");
}
function setSecletTit(selectId){
    var value=$("#"+selectId+" option:selected").attr("title");
//    console.log("选中的value值是"+value);
    $("#"+selectId).prop("title",value);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
//    d.setTime(d.getTime() + (exdays*1000));//设置过期时间是多少天后；
//    d.setTime(d.getTime() + (exdays*60*60*1000));//设置过期时间是多少小时；
    d.setTime(d.getTime() + (exdays*60*60*1000));//设置过期时间是多少小时；
    var expires = "expires="+d.toUTCString();

    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return null;
}
function clearCookie(name) {
    setCookie(name, "", -1);
}
/*
 * url 目标url
 * arg 需要替换的参数名称
 * arg_val 替换后的参数的值
 * return url 参数替换后的url
 */
function changeURLArg(url, arg, arg_val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
    return url + '\n' + arg + '\n' + arg_val;
}


function changeCode(){
        var codeSrc=document.getElementById("code");
//        codeSrc.src='http://localhost:3001/ccap?'+new Date().getTime();
        codeSrc.src='/app/ccap?'+new Date().getTime();
    }
    function styleEmail(email){
        var emailStr,atMark,qqNumber,replaceStr,qqNumberLength,xingStr='';
        emailStr=email;
        atMark=email.indexOf("@");
        qqNumber=email.substring(0,atMark);
        qqNumberLength=qqNumber.length;
//    console.log("emailStr:"+emailStr+"atMark:"+atMark+"qqNumber:"+qqNumber+"qqNumberLength:"+qqNumberLength);
        replaceStr=qqNumber.substring(2,qqNumberLength-2);
        for(var i=1;i<=replaceStr.length;i++){
            xingStr+="*";
        }
//    console.log("replaceStr="+replaceStr+"xingStr="+xingStr);
        emailStr=emailStr.replace(replaceStr,xingStr);
//    console.log("替换后的email为："+emailStr);
        return emailStr;

    }

   /************上传文件*******************/
//    function uploadFile(uploadBtnId,downloadUrlId){
//           $(uploadBtnId).uploadify({
//               'buttonClass': 'some-class',                //按钮的样式
//               'buttonText': '选择文件',                    //按钮的文字
//               'swf': 'libs/uploadify/uploadify.swf',  //swf文件的路径
//               'fileObjName': 'file',
//               'uploader': 'http://up.wcsapi.biz.matocloud.com:8090/file/upload?'+new Date().getTime(),         //提交到后台的路径
//               //开始传输之前触发
//               'onUploadStart': function (file) {
//                   //获得上传的token
//                   $.ajax({
//                       url: '/uptoken',
//                       type: "get",
//                       async: false,
//                       dataType: "json",
//                       success: function (data) {
//                           var uptoken = data.uptoken;
//                           $(uploadBtnId).uploadify("settings", "formData", {'token': uptoken});
////                           alert(uptoken);
//                       }
//                   });
////                   alert('Starting to upload ' + file.name);
//               },
//               //全部上传成功之后触发
//               'onUploadSuccess': function (file, data, response) {
////                   alert("data:"+Base64.decode(data));
////                   console.log("data:"+Base64.decode(data));
//                   var mark=Base64.decode(data).indexOf("=");
//                   var iconUrl=Base64.decode(data).substring(mark+1,Base64.decode(data).length);
//                   $(downloadUrlId).attr("value",iconUrl);
////                   console.log("下载地址为："+$(downloadUrlId).attr("value"));
//               }
//           });
//
//   }
//图片名称不能含特殊字符;

    function CheckStr(str){
    var pattern = new RegExp("[`_~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    var i=0;
    for (i=0;i<str.length;i++){
          var zifu=str.substr(i,1);
          if(pattern.test(zifu)){
              return true;
          }else{
              continue;
          }
      }
    if(i>=str.length){
        return false;
    }
    }

//检验是否含有特殊字符；
function stripscript(s)
{
    var pattern = new RegExp("[`_~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    return pattern.test(s);
}
    /**
     * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
     */
    function isPwd(str){
     //   var myReg=/^[_0-9a-zA-Z]{6,12}$/;
        var myReg=/^[0-9a-zA-Z]+$/;
        var pattern = new RegExp("[`_~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        var strBool;
        if(5<str.length&&str.length<13){
            for(var i=0;i<str.length;i++){
                var zifu=str.substr(i,1);
//                console.log("字符串："+zifu+"--是否是字母等="+myReg.test(zifu)+"--是否是特殊字符"+pattern.test(zifu));
                if(myReg.test(zifu)||pattern.test(zifu)){
                    strBool=true;
                }else{
                    strBool=false;
                }
            }
            return strBool;
        }else{
            return false;
        }
    }
    /*
     *匹配用户名：5-20位的、字母、数字、下划线的组合；
     */
    function isUserName(str){
//        var myReg=/^\\w{5,20}$/;
        var myReg=/^[_0-9a-zA-Z]{5,20}$/;
        if(myReg.test(str)){
            return true;
        }else{
            return false;
        }
    }
    /*
     用途：检查输入对象的值是否符合E-Mail格式
     输入：str 输入的字符串
     返回：如果通过验证返回true,否则返回false

     */
    function isEmail( str ){
        var myReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
//        var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
        if(myReg.test(str)){
            return true;
        }else{
            return false;
        }
    }
    /*
    验证是否为空；
     */
    function isEmpty(str){
      if(str!=""){
          return false;
      }else{
         return true;
      }
    }
/*
验证字符的长度是否在1-100个字符/字母 数字 下划线组成
 */
function checkNameRight(str){
       var myReg=/^[a-zA-Z0-9_.\u4e00-\u9fa5]{1,100}$/;
//    if(myReg.test(str)||myReg2.test(str)){
    if(myReg.test(str)){
        return true;
    }else{
        return false;
    }
}

//alert(checkNameRight('@啊飒飒'));
    function isLengthError(str){
        if(str.length<1||str.length>100){
            return true;
        }else{
            return false;
        }
    }


    /***********************注册表单验证***************************************/
function checkRegisterForm(formObj){
//    console.log(JSON.stringify(formObj));
    var loginName=isUserName(formObj.loginName);
    var password=isPwd(formObj.plainPassword);
    var email=isEmail(formObj.email);

//     console.log(loginName+"//"+password+'//'+email);
     if(loginName&&password&&email){return true;}
        if(!loginName){
            _hideMask();
            swal("", "用户名为5-20位字母、数字、下划线的组合!", "error");
            changeCode();
            return false;
        }
        if(!password){
            _hideMask();
            swal("", "密码为6-12位字母、数字、下划线、特殊字符的组合!", "error");
            changeCode();
            return false;
        }
        if(!email){
            _hideMask();
            swal("", "邮箱格式不正确!", "error");
            changeCode();
            return false;
        }
  }

//全选与反选；
function wholeInputchecked(wholeId,boxId){
//    console.log(wholeId+"---"+boxId);
    var bool=$(wholeId).is(":checked");
//    console.log("当前的全选参数值为："+bool);
    if(bool){
        $(boxId).find("table tbody tr input[type='checkbox']").prop("checked","checked");
    }else{
        $(boxId).find("table tbody tr input[type='checkbox']").removeAttr("checked");
    }

}
//获取当天的日期；
    function getTodayDate(){
        var d = new Date();
        var year = d.getFullYear();
        var mon=d.getMonth()+1;
        var day=d.getDate();
        var today=year+'-'+mon+'-'+day;
        return today;
    }
    //获取前n天的日期，即获取最近n+1天前的日期；
    function getBeforeDate(n){
        var n = n,s;
        var d = new Date();
        var year = d.getFullYear();
        var mon=d.getMonth()+1;
        var day=d.getDate();
//        console.log(year+'mon:'+mon+"day:"+day);//2015-4-23
        if(day <= n){//如果要获取的是在当前日期内并且是该月内的日期，如果day>n则表示日期回到前一个月；
            if(mon>1) {//判断会不会跨年，表示还是当年内；
                mon=mon-1;
            }else {
                year = year-1;
                mon = 12;
            }
        }
        d.setDate(d.getDate()-n);
        year = d.getFullYear();
        mon=d.getMonth()+1;
        day=d.getDate();
        s = year+"-"+(mon<10?('0'+mon):mon)+"-"+(day<10?('0'+day):day);
        return s;
    }
    //检测两个日期之间间隔的天数；
    function GetDateRegion(BeginDate,EndDate){
        var aDate, oDate1, oDate2, iDays;
//        var sDate1=document.getElementById(BeginDate).value;   //sDate1和sDate2是2008-12-13格式
//        var sDate2=document.getElementById(EndDate).value;
        var sDate1=BeginDate;
        var sDate2=EndDate;
        aDate = sDate1.split("-");
        oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);   //转换为12/13/2008格式
        aDate = sDate2.split("-");
        oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
        //iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24)+1;   //把相差的毫秒数转换为天数
        var i=(oDate1 - oDate2) / 1000 / 60 / 60 /24;
        if(i<0)
        {
            i-=1;
        }
        else
        {
            i+=1;
        }
        iDays = i;   //把相差的毫秒数转换为天数
        return Math.abs(iDays);
    }
//折线图；
function dataPainting(containerId,data){
//      console.log("数据列表："+JSON.stringify(data));
    var xData=data.xData;
    var yData=data.listItem;
    $('#' + containerId).highcharts({
        chart:{
            margin: [80, 10, 100, 60]
        },
        title: {
            text:'',
            x: -20 //center
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories:xData,
            gridLineColor:"#ccc",
            gridLineWidth:1
        },
        yAxis: {
            title: {
                text: '下载量 (次)'
            },
            plotLines: [{
//                    value: 0,
//                    dashStyle:'Dash',
//                    width: 2,
//                    color: '#ff0000',
                zIndex:5
            }],
            gridLineColor:"#ccc",
            gridLineWidth:1

        },
        tooltip: {
            valueSuffix: '数量(单位：次)'
        },
        legend: {
            enabled: true
        },
        series:yData
    });
}
/*********************************/
function Tip(status){
//    console.log(status);
    _hideMask();
    if (status === 408) {
        swal("","Error - " + status + ", 超时！","error");
    }
    if(status === 404){
        swal("","Error - " + status + ", 找不到资源!","error");
    }
    if(status === 500||status === 'ECONNREFUSED'){
        swal("","Error - " + status + ", 服务器异常！","error");
    }
}



/*
 * 加密解密
 * */
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1,
    63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4)
                | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;
        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}
function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                // 110x xxxx 10xx xxxx
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx 10xx xxxx 10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12)
                    | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}
