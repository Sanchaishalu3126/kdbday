
let currentPage = 1;
const totalPages = 11;

function showPage(pageNumber) {
    document.querySelectorAll(".chapter").forEach(page => {
        page.classList.remove("active");
    });

    const next = document.getElementById("page" + pageNumber);

    next.classList.add("active");
    currentPage = pageNumber;

    document.getElementById("progressBar").style.width =
        (pageNumber / totalPages * 100) + "%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function restartWebsite() {
    showPage(1);
}

function toggleMusic() {
    const music = document.getElementById("music");
    const button = document.getElementById("musicBtn");

    if (music.paused) {
        music.play().then(() => {
            button.innerHTML = "♫ Music On";
        }).catch(() => {
            button.innerHTML = "♫ Try Again";
        });
    } else {
        music.pause();
        button.innerHTML = "♫ Music Off";
    }
}

function openLetter() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.style.display = "none";
    letter.classList.remove("hidden");
}

function blowCandle() {
    const flame = document.getElementById("flame");
    const message = document.getElementById("cakeMessage");

    flame.innerHTML = "💨";
    flame.style.pointerEvents = "none";

    message.innerHTML =
        "Your wish is on its way! Happy Birthday, Karthiga! 🎉";

    createConfetti();
}

function createConfetti() {
    const colors = ["#f5b9ca", "#e6c27a", "#d9c8f2", "#ffffff"];

    for (let i = 0; i < 70; i++) {
        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.top = "-15px";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.width = "8px";
        piece.style.height = "12px";
        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = "2px";
        piece.style.zIndex = "2000";
        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        const fall = piece.animate([
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform:
                    `translateY(${window.innerHeight + 50}px) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: 2500 + Math.random() * 2000,
            easing: "ease-out"
        });

        fall.onfinish = () => piece.remove();
    }
}
