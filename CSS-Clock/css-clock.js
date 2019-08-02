'use strict';

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('hour-hand');

function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transition = secondsDegrees === 90 ? 'all 0s' : 'all 0.05s';

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    minutesHand.style.transition = minsDegrees === 90 ? 'all 0s' : 'all 0.05s';


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);