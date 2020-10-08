const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const PARAM = 0.693;

module.exports = function dateSample(value) {
    if (value === undefined || value === null || typeof value !== typeof 'string' || value == "" || Number.isNaN(parseFloat(value)) ||
        Number.parseFloat(value) <= 0) return false
        /*throw new CustomError('Not implemented');
        // remove line with error and write your code here*/
    let result = Math.log10(MODERN_ACTIVITY / parseFloat(value)) / PARAM * HALF_LIFE_PERIOD

    return result < 0 ? false : result
};