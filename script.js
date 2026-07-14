// Efek tulisan muncul satu per satu
const text = "Untuk Niko ❤️";
let index = 0;

function typingEffect() {
    const title = document.querySelector(".title");

    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 150);
    }
}

typingEffect();


// Tombol kejutan
const button = document.getElementById("loveButton");

if (button) {
    button.addEventListener("click", function () {
        alert("Terima kasih sudah menjadi seseorang yang spesial ❤️");
    });
}


// Efek hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
