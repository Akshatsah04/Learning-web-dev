const messages = ['Welcome to the Future!', 'Discover the Unknown...', 'Your Journey Begins Now.'];
let index = 0;

function revealMessage() {
    const textElement = document.getElementById('typed-text');
    textElement.style.opacity = 0;
    textElement.textContent = messages[index];
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.02;
        textElement.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeIn);
            setTimeout(() => {
                fadeOutMessage();
            }, 2000);
        }
    }, 50);
}

function fadeOutMessage() {
    const textElement = document.getElementById('typed-text');
    let opacity = 1;
    const fadeOut = setInterval(() => {
        opacity -= 0.02;
        textElement.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOut);
            index = (index + 1) % messages.length;
            revealMessage();
        }
    }, 50);
}

document.addEventListener('DOMContentLoaded', revealMessage);