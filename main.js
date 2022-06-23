
function clock (){
const fulldate = new Date();
let Hours = fulldate.getHours();
let Minutes = fulldate.getMinutes();
let Seconds = fulldate.getSeconds();

if (Hours < 10){
    Hours= "0" + Hours;
}
if (Minutes < 10){
    Minutes= "0" + Minutes;
}
if (Seconds < 10){
    Seconds= "0" + Seconds;
}
document.getElementById('hour').innerHTML =  Hours;
document.getElementById('minute').innerHTML =  ":" + Minutes;
document.getElementById('seconds').innerHTML =  ":" + Seconds;

}

setInterval(clock, 100);






