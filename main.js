let Time = document.getElementById("time");
let timeformat = document.getElementById("timeFormat");
let container = document.querySelector(".container");
let btn = document.querySelector("button");
let clock = document.querySelector(".clock");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();

  let hour = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  hour = hour < 10 ? `0${hour}` : hour;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  Time.innerHTML = `${hour} : ${mins} : ${secs}`;

  timeformat.innerHTML = hour > 12 ? "PM" : "AM";
};
let theme = "light";
btn.addEventListener("click", () => {
  if (theme == "light") {
    container.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1536183922588-166604504d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhcmslMjB0aGVtZSUyMHdhbGxwc3BlfGVufDB8MHwwfHx8MA%3D%3D')";
    clock.style.border = "10px solid black";
    clock.style.boxShadow =
      "5px 15px 20px #013349 , inset -5px -13px 12px rgba(0,0,0,1)";
    btn.style.boxShadow = " inset 5px 15px 20px #013349";
    btn.style.backgroundColor = "black";
    theme = "dark";
  } else {
    container.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1588097257570-59b6f7360bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNldGhldGljJTIwciUyMHRyZWVzJTIwcGluayUyMHNoYWRlJTIwd2FsbHBhZXJ8ZW58MHwwfDB8fHww')";
    clock.style.border = "15px solid pink";
    btn.style.backgroundColor = " rgb(216, 156, 166)";
    btn.style.boxShadow =
      "inset 5px 6px  12px rgba(241, 235, 235, 0.9), 5px 5px 12px rgba(0, 0, 0, 0.9)";
    clock.style.boxShadow =
      "inset -5px -5px 12px rgba(0, 0, 0, 0.5) , -5px 5px 12px rgba(0, 0, 0, 0.9)";
    theme = "light";
  }
});
