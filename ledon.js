const Gpio = require('pigpio').Gpio;

const pin = new Gpio(17, {mode: Gpio.OUTPUT});

pin.digitalWrite(1);
