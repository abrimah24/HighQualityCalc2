function clock(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date. getSeconds();
    var session = "AM";

   if (hours == 0){
       hours = 12;
   }
   if (hours > 12){
       hours -= 12;
       session = "PM";
   }
    if (hours < 10){
        hours = '0' + hours;
    }
    if (mins < 10){
        mins = '0' + mins;
    }
    if (secs < 10){
        secs = '0' + secs;
    }
    var time = hours + ":" + mins + ":" + secs + " " + session;
    document.getElementById("hour").innerHTML=time;
}
setInterval(clock, 1000);