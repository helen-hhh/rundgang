
let textElements = document.getElementsByClassName('textElement');

let gradient = document.getElementById("gradient");

let wobbleIntervals = [];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startWobble() {
    let element = this;
    let intervalId = setInterval(function () {
        element.style.transform = `translate(${getRandomInt(-2, 2)}px, ${getRandomInt(-2, 2)}px)`;
    }, 33);
    wobbleIntervals.push(intervalId);
}

function stopWobble() {
    while (wobbleIntervals.length) {
        clearInterval(wobbleIntervals.pop());
    }
    this.style.transform = '';
}

function pauseAnimation() {
    gradient.style.animationPlayState = "paused";
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].parentNode.style.animationPlayState = 'paused';
    }
    this.style.backgroundColor = '#1B2CC1';
    this.style.color = '#FFFCF6';
    startWobble.call(this);
}

function resumeAnimation() {
    gradient.style.animationPlayState = "running";
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].parentNode.style.animationPlayState = 'running';
    }
    this.style.backgroundColor = '';
    this.style.color = '';
    stopWobble.call(this);
}

for (let i = 0; i < textElements.length; i++) {
    textElements[i].onmouseover = pauseAnimation;
    textElements[i].onmouseout = resumeAnimation;
}

let textElement = document.getElementById('text');
let popupElement = document.getElementById('popup');

textElement.addEventListener('click', () => {
    if (popupElement.style.display === 'block') {
        popupElement.style.display = 'none';
    } else {
        popupElement.style.display = 'block';
    }
});