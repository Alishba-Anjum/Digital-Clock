let Time = document.getElementById("time");
let timeformat = document.getElementById("timeFormat");


document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime ,1000);
});

const showTime = ()=>{
   let date = new Date();

   let hour = date.getHours();
   let mins = date.getMinutes();
   let secs = date.getSeconds();

   hour = hour<10 ? `0${hour}` : hour;
   mins = mins<10 ? `0${mins}` : mins;
   secs = secs<10 ? `0${secs}` : secs;

   Time.innerHTML = `${hour} : ${mins} : ${secs}`;

   timeformat.innerHTML = hour>12 ? "PM" : "AM";

}