const deg = 6; 
const hour = document.querySelector("#hr");
const min = document.querySelector("#mn");
const sec = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hours = day.getHours();
    let mins = day.getMinutes();
    let secs = day.getSeconds();

    let hoursDeg = (hours % 12) * 30 + mins * 0.5; 
    let minsDeg = mins * deg; 
    let secsDeg = secs * deg; 

    hour.style.transform = `rotateZ(${hoursDeg}deg)`;
    min.style.transform = `rotateZ(${minsDeg}deg)`;
    sec.style.transform = `rotateZ(${secsDeg}deg)`;
}, 1000); 
