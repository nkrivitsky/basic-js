const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    const ERROR_MESSAGE = 'Unable to determine the time of year!'

    if (date == undefined || date == null) return ERROR_MESSAGE

    if (date instanceof Date === false || date.getTime() === false) {
        throw Error("Burn in the HELL!!!");
    }

    let parseResult = new Date(date)

    let month = parseResult.getMonth()

    if (month < 2 || month == 11) {
        return 'winter'
    } else if (month < 5) {
        return 'spring'
    } else if (month < 8) {
        return 'summer'
    } else {
        return 'autumn'
    }
}