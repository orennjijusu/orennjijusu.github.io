function getTime(){  

    const date=new Date() ;

    const month = date.getMonth()+1;

    const mon = month <10? '0'+month:month

    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() ;

    const hh=date.getHours() < 10 ? '0' + date.getHours() : date.getHours() ;

    const mm=date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    const ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()   ;

    const ms =date.getMilliseconds();

   document.getElementById("myclock").innerHTML=hh+":"+mm+":"+ss+"."+ms 
 //  document.getElementById("myday").innerHTML=mon+"-"+day 

}
const mytime = setInterval("getTime()",1); 