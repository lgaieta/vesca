const Gpio = require('pigpio').Gpio;

const pin = new Gpio(17, {mode: Gpio.OUTPUT});

let on = false;

setInterval(() => {
    if (on) pin.digitalWrite(0);
    else pin.digitalWrite(1);

    on = !on;
}, 500);

