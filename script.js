// ============================
// LOADING SCREEN
// ============================
window.onload = function () {

    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 800);

    }, 2000);

};

// ============================
// TYPING EFFECT
// ============================
const text = "Welcome To Our Love Story ❤️";
let i = 0;

function typing() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }

}

typing();

// ============================
// PLAY MUSIC
// ============================
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

if (playBtn && music) {

    playBtn.onclick = function () {

        music.play();

        music.volume = 0.6;

        playBtn.innerHTML = "❤️ I Love You ❤️";

        if (typeof confetti === "function") {

            confetti({
                particleCount: 180,
                spread: 90,
                origin: { y: 0.6 }
            });

        }

    };

}

// ============================
// LOVE LETTER
// ============================
const message = `Hai Sayang ❤️

Terima kasih sudah hadir dalam hidupku.

Semoga kita selalu bersama,
saling menguatkan,
dan saling mencintai.

I Love You Forever ❤️`;

let letterIndex = 0;

function writeLetter() {

    const letter = document.getElementById("letter");

    if (!letter) return;

    if (letterIndex < message.length) {

        letter.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        setTimeout(writeLetter, 35);

    }

}

setTimeout(writeLetter, 2500);

// ============================
// LOVE COUNTER
// ============================

// GANTI TANGGAL JADIAN
const anniversary = new Date("2025-02-14");

function countLove() {

    const daysElement = document.getElementById("days");

    if (!daysElement) return;

    const today = new Date();

    const diff = today - anniversary;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysElement.innerHTML = days + " Days ❤️";

}

countLove();

setInterval(countLove, 1000);

// ============================
// FLOATING HEART
// ============================
function createHeart() {

    const hearts = document.getElementById("hearts");

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 300);

// ============================
// QR CODE
// ============================
const qr = document.getElementById("qrcode");

if (qr && typeof QRCode !== "undefined") {

    new QRCode(qr, {

        text: "https://yaa38636-ui.github.io/romantic-website/",

        width: 180,

        height: 180

    });

}