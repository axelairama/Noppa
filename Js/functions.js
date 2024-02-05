'use strict'

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.getElementById('dice').addEventListener('click',() => {
    const arpa = getRandomIntNumberInRange(1,6)

    if (arpa === 1) {
        document.querySelector('img').src="./img/1.png"
    }

    if (arpa === 2) {
        document.querySelector('img').src="./img/2.png"
    }

    if (arpa === 3) {
        document.querySelector('img').src="./img/3.png"
    }

    if (arpa === 4) {
        document.querySelector('img').src="./img/4.png"
    }

    if (arpa === 5) {
        document.querySelector('img').src="./img/5.png"
    }

    if (arpa === 6) {
        document.querySelector('img').src="./img/6.png"
    }
})