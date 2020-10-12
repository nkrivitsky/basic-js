const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (str === undefined) return "";

    if (str === null) str = 'null'

    if (options === undefined || options === null) {
        options = new Object();
    }

    if (options["repeatTimes"] === undefined) {
        options["repeatTimes"] = 1;
    }

    if (options["additionRepeatTimes"] === undefined) {
        options["additionRepeatTimes"] = 1;
    }

    if (options["addition"] === undefined) {
        options["addition"] = '';
    }

    if (options["addition"] === null) {
        options["addition"] = 'null';
    }

    if (options["separator"] === undefined) {
        options["separator"] = '+';
    }

    if (options["separator"] === null) {
        options["separator"] = 'null';
    }

    if (options["additionSeparator"] === undefined) {
        options["additionSeparator"] = '|';
    }

    if (options["additionSeparator"] === null) {
        options["additionSeparator"] = 'null';
    }

    console.log(options);
    let additionStr = ([].concat(...Array(Number.parseInt(options["additionRepeatTimes"])).fill(options["addition"].toString())).join(options["additionSeparator"].toString()));

    let array = [].concat(...Array(Number.parseInt(options["repeatTimes"])).fill(str.toString() + additionStr));

    return array.join(options["separator"].toString());
};