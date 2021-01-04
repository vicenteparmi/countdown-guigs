// Contagem regressiva pro aniver do morado

/*  Oi morado ou pessoa aleatória que veio ler o meu código,
    tudo bem contigo? Então, esse código só vai ser disponibilizado
    no dia anterior ao fim da contagem, só pra garantir que pessoas
    como você não iriam ficar olhando nele e tentando encontrar
    o que acontece no final antes da data. Até lá é só torcer pra
    não dar nenhum problema que me faça perder o código. É isto. */

const dataDoNiver = new Date(2021, 0, 4); // TODO: fix the date

// Numbers

let d, h, m, s;
let play = true; // TODO: turn music on
let photoDisplayTime = 2000; // 2000 is the ideal

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
        displayCountdown("0", "0", "0", "0");
        const lock = document.getElementById('lock');
        lock.src = "open-lock.svg";
        lock.onclick = () => {celebrate()};
        lock.classList.add('openLock');
        preloadImages();
    } else {
        displayCountdown(days, hours, minutes, seconds);
    }
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

function celebrate() {
    document.getElementById('countdown').className = "fadeout";
    document.getElementById('lock').className = "fadeout";

    const fn = document.getElementById('finalnumber');
    setTimeout(() => {
        confetti.start();
        fn.style.display = "block";
        fn.classList.add('magictime', 'puffIn');
        if (play) {
            const youtubeMusic = document.createElement('spam');
            youtubeMusic.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qXtxrEiuZPE?controls=0?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            youtubeMusic.style.display = 'none';
            document.getElementById('background').appendChild(youtubeMusic);
            play = false;
        }
    }, 2000);

    setTimeout(() => {confetti.stop()}, 10000);
    setTimeout(() => {document.getElementById('celebration').className = 'fadeout'}, 14000);

    setTimeout(() => {
        document.getElementById('countdown').style.display = "none";
        document.getElementById('lock').style.display = "none";
        let intervalPhotos = setInterval(() => {
            displayPhoto(intervalPhotos);
            console.log("Te amo morado ID:"+Math.random);
        }, photoDisplayTime);
    }, 10000);
}

let arrayNum = photos.length;

function displayPhoto(intervalPhotos) {
    if (arrayNum >= 0) {

        const thisPhoto = document.createElement('div');
        thisPhoto.style.backgroundImage = 'url(' + photos[photos.length - arrayNum] + ")";
        thisPhoto.className = "photos";

        thisPhoto.style.top = window.innerHeight * Math.random() * 0.8 - (window.innerHeight*0.1) + "px";
        thisPhoto.style.left = window.innerWidth * Math.random() * 0.9 - (window.innerWidth*0.05) + "px";

        document.getElementById('background').appendChild(thisPhoto);

        arrayNum--;
    } else {
        clearInterval(intervalPhotos);
        //setTimeout(() => {document.getElementById('background').style.opacity = 0.2;}, 1000);
        setTimeout(() => {
            document.getElementById('bf').style.opacity = 0;
            document.getElementById('bfu').style.color = "rgba(0,0,0,0)";
            document.getElementById('bfu').style.display = "none";
            document.getElementById('finalScreen').style.display = "block";
            document.getElementById('message').innerHTML = message;
            document.getElementById('background').style.filter = "blur(20px)"
        }, 1100);
    }
}

function showAll() {
    document.getElementById('finalScreen').className = 'fadeout';
    document.getElementById('background').style.display = 'none';
    document.getElementById('showAllScreen').style.display = 'block';

    setTimeout(() => {
        document.getElementById('finalScreen').style.display = 'none';
        document.getElementById('celebration').style.display = 'none';
    }, 1000);

    // Initialize collumns
    for (let i = 0; i < 4; i++) {
        const collum = document.createElement('div');
        collum.id = "col" + i;
        collum.className = "col";

        document.getElementById('row').appendChild(collum);
    }

    let ccol = 0;
    photos.map(cimg => {
        const thisImg = document.createElement('img');
        thisImg.src = cimg;
        thisImg.className = "colimg";

        document.getElementById('col'+ccol).appendChild(thisImg);
        ccol++;
        if (ccol == 4) {
            ccol = 0;
        }
    })
}

function preloadImages() {
    photos.map(cimg => {
        var img = new Image();
        img.src = cimg;
    })
}

// rs
// 457520706f64657269612061636f726461722073656d20746575206f6c68617220646520736f6e6f0a53656d20746575206cc3a162696f2071756520c3a920646f6e6f0a4d6173206575206ec3a36f20717565726f0a4575206ec3a36f20717565726f0a457520706f646572696120656e63616e746172207175616c71756572206f7574726f20706172206465206f757669646f730a4ec3a36f20746520746572206d616973206171756920636f6d69676f0a4d6173206575206ec3a36f20717565726f206ec3a36f0a4575206ec3a36f20717565726f0a506f646572696120696d6167696e61720a4f75206174c3a92061636f7374756d61720a4f206d657520717565726572206e6f7574726f206c756761720a54616e746120636f69736120656d207175652061717569206361626520756d2073696d0a4d6173206ec3a36f0a506f7271756520657520746520616d6f0a45206ec3a36f20636f6e7369676f206d65207665722073656d20736572206f2074657520616d6f7220706f7220616e6f730a4ec3a36f20c3a920616361736f2c20c3a92073c3b320616d6f720a4ec3a36f2065786973746520656e67616e6f0a517565206d6520636172726567756520707261206c6f6e67650a517565207465206661c3a761206f7574726f7320706c616e6f732c206d65752062656d0a5465752063686569726f2073c3b32074752074656d0a54756120626f63612073c3b32074752074656d2c206d652074656d0a457520706f6465726961206ec3a36f2076697665722074756173207072696d65697261732072756761730a4e656d2065737461722061717569207072612061646976696e686172206120747561206d656dc3b372696120656d20667567610a4d6173206575206ec3a36f20717565726f0a4575206ec3a36f20717565726f0a457520706f6465726961206ec3a36f206c696461720a457520706f6465726961206e656d206c696761720a4d6173206ec3a36f2c206ec3a36f2c206ec3a36f0a4575206ec3a36f20717565726f206ec3a36f0a506f646572696120696d6167696e6172204f75206174c3a92061636f7374756d61720a4f206d657520717565726572206e6f7574726f206c756761720a54616e746120636f69736120656d207175652061717569206361626520756d2073696d2c206d6173206ec3a36f0a506f7271756520657520746520616d6f0a45206ec3a36f20636f6e7369676f206d65207665722073656d20736572206f2074657520616d6f7220706f7220616e6f730a4ec3a36f20c3a920616361736f2c20c3a92073c3b320616d6f720a4ec3a36f2065786973746520656e67616e6f0a517565206d6520636172726567756520707261206c6f6e67650a517565207465206661c3a761206f7574726f7320706c616e6f732c206d65752062656d0a5465752063686569726f2073c3b32074752074656d0a54756120626f63612073c3b32074752074656d0a54616e746120636172612c2054616e74612065737175696e610a54616e746f20666f676f2054616e746120666f6d652054616e74612072696d610ac3892074616e746120636f69736120717565206e656d20736569206f6e646520766169206461720a54616e746f2071756520657520706f73736f20696d6167696e61720a54616e74612066616c74612054616e746120666f6d650a54616e7461207072657373610a54616e74612c2074616e74612c2074616e74610a54616e746120636f69736120656d207175652061717569206361626520756d2073696d2c206d6173206ec3a36f0a506f7271756520657520746520616d6f0a45206ec3a36f20636f6e7369676f206d65207665722073656d20736572206f2074657520616d6f7220706f7220616e6f730a4ec3a36f20c3a920616361736f2c20c3a92073c3b320616d6f720a4ec3a36f2065786973746520656e67616e6f0a517565206d6520636172726567756520707261206c6f6e67650a517565207465206661c3a761206f7574726f7320706c616e6f732c206d65752062656d0a5465752063686569726f2073c3b32074752074656d0a54756120626f63612073c3b32074752074656d0a506f7271756520657520746520616d6f0a45206ec3a36f20636f6e7369676f206d65207665722073656d20736572206f2074657520616d6f7220706f7220616e6f730a4ec3a36f20c3a920616361736f2c20c3a92073c3b320616d6f720a4ec3a36f2065786973746520656e67616e6f0a517565206d6520636172726567756520707261206c6f6e67650a517565207465206661c3a761206f7574726f7320706c616e6f732c206d65752062656d0a5465752063686569726f2073c3b32074752074656d0a54756120626f63612073c3b3206d652074656d