$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
});

function startTime(){
    var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"});
    asiaTime = new Date(asiaTime);

    var year=asiaTime.getFullYear();
    var month=asiaTime.getMonth();
    var day=asiaTime.getDate();
    var hours=asiaTime.getHours();
    var minutes=asiaTime.getMinutes();
    var seconds=asiaTime.getSeconds();


    var result=year+" - " + month + " - " + day + "   " + hours + ":" + minutes + ":" + seconds + "   GMT+7";

    document.getElementById("question4_2").innerHTML = result;
    var t = setTimeout(startTime, 500);
}