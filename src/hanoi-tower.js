const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    if (!(Number.isInteger(disksNumber) || Number.parseInt(disksNumber) >= 0)) return { "turns": 0, "seconds": 0 }
    let count = disksNumber == 0 ? 0 : Math.pow(2, disksNumber) - 1

    return { "turns": count, "seconds": Number.parseInt(3600 / Number.parseFloat(turnsSpeed) * (count)) }
};