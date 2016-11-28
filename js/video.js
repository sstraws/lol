/**
 */
$(function(){

    function getDate(date) {
        //判断date是否是日期对象
        if (!(date instanceof Date)) {
            return;
        }

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;

        return year + "-" + month + "-" + day + " " + hour + ":" + minute ;
    }
    var count = 0;
    $("#replayButton").click(function (){
        count++;
       /* switch(count) {
            case 1: $(".newReplayContent").empty();
            case 2,3: 
                
                break;
        }*/
        if(count == 1){
            $(".newReplayContent").find("div").remove();
        }
        if(count >= 3){
            $(".newReplayContent a").show("slow");
        }
        var areaTxt = $("#videoreplayArea").val();//获取文本域中的内容

        var str = '<div class="addNewReplay" >' +
            '<div style="position: absolute;width:450px;height:40px;top:35px;left:80px" class="addNewReplayDiv">' +areaTxt +
            '</div>' +
            '<div style="color:#9e9e9e;font-size:10px;position: absolute;width:150px;height:18px;top:8px;right:25px">' +
            '发表于:'+getDate(new Date()) +
            '</div>' +
            '</div>';
        $(".newReplayContent").prepend(str);
        $(".newReplayContent>div").eq(0).addClass("addNewReplay");
    });
});
$(function(){
 //点击播放视频
    $("#J_play").click(function () {
        $("figure").slideDown().css("top", "0px");
        $("#video1").slideDown().css("height", "470px");
        //开始播放
        $("#video1")[0].play();
    });
    //关闭视频按钮
    $("#closeBtn").click(function () {
        $("figure").slideUp(1000);
        $("#video1").fadeOut(1000);
        //暂停播放
        $("#video1")[0].pause();
    });
});