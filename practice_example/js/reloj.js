






function show(){
    var Digital=new Date()
    var hours=Digital.getHours()
    var minutes=Digital.getMinutes()
    var seconds=Digital.getSeconds()
    var dn="AM" 
    if (hours>12){
    dn="PM"
    hours=hours-12
    }
    if (hours==0)
    hours=12
    if (minutes<=9)
    minutes="0"+minutes
    if (seconds<=9)
    seconds="0"+seconds
    var hora=hours+":"+minutes+":"+seconds+" "+dn;
    console.log(document.getElementById("hora"));
    document.getElementById("hora").innerHTML=hora;

    setTimeout("show()",1000);
}
show()


