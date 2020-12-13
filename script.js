// Contagem regressiva pro aniver do morado

const dataDoNiver = new Date(2021, 0, 4);

// Numbers

let d, h, m, s;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = dataDoNiver - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Fim da contagem
    if (distance < 0) {
        clearInterval(x);
    } else {
        displayCountdown(days, hours, minutes, seconds);
    }

    console.log("executinf");
}, 1000);

function displayCountdown(days, hours, minutes, seconds) {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");

    if (days != d) {
        b1.innerHTML = days;
        b1.classList.add('magictime','puffIn');
        d = days;
    }
    if (hours != h) {
        b2.innerHTML = hours;
        b2.classList.add('magictime','puffIn');
        h = hours;
    }
    if (minutes != m) {
        b3.innerHTML = minutes;
        b3.classList.add('magictime','puffIn');
        m = minutes;
    }
    if (seconds != s) {
        b4.innerHTML = seconds;
        b4.classList.add('magictime','puffIn');
        s = seconds;
    }

    
}