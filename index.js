module.exports = (homebridge) => {
    // eslint-disable-next-line global-require
    const HoneywellAirConditioner = require('./lib/HoneywellAirConditioner')(homebridge);
    homebridge.registerAccessory('homebridge-honeywell-air-conditioner', 'HoneywellAirConditioner', HoneywellAirConditioner);
};
