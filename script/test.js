// (function(){
//     /**
//      * just test for run by self
//      */
//     console.log('congzhaoyang is cool');
//     var hiddenEle1 = document.getElementsByTagName('div')
//     if(hiddenEle1) {
//         hiddenEle1.style.display = "none"
//         // hiddenEle1.style.visibility = "hidden"
//     }
//     console.log(hiddenEle1)
// })();

// function getCurIp(){
//     $.ajax({
//     url:"http://www.ip38.com/",
//     type:"GET",
//     dataType: "text",
//     async:false,
//     timeout: 1e4,
//     success:function(data, t, jqXHR){
//     //<LI>您的本机IP地址：
//     //    111.12.126.16    &nbsp;&nbsp;来自：</strong><span id="ipad"> 稍等,查询中.... </span></LI>
//     //var reg=/您的本机IP地址：\s.*?(\d*\.\d*\.\d*\.\d*)/;
//     var reg=/\b(?:\d{1,3}\.){3}\d{1,3}\b/;   //由于网页改版，根据网友nicktreyqqcom意见做了修改
//     var result=reg.exec(data);
//     console.log(result[0]);
//     console.log(result[1]);
//     curIp=result[1];
//     // alert(curIp);
//     if(result[1]!=undefined){
//     console.log('成功获取本机ip');
//     }else{
//     }
//     $('body').append("外网ip为："+curIp);
//     },
//     error:function( jqXHR, textStatus, errorThrown) {
//     alert(textStatus);
//     alert(jqXHR.status);
//     //setTimeout(getCurIp,5000);
//     }
//     });
//     }
//     $(document).ready(function(){
//     getCurIp();
//     });
(function() {
    var ele1 = $('.nowcoder-header').html()
    console.log(ele1)
})()
    