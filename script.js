const time = document.getElementById("currentTimeUTC");
const day = document.getElementById("currentDay");
let t = new Date();
let d = t.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


time.innerText = t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds() + ":" + t.getUTCMilliseconds();

day.innerText = dayList[t.getDay()];