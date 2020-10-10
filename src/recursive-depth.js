const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(array) {
        if (Array.isArray(array)) {
            array.push(0)
            return 1 + Math.max(...array.map(item => this.calculateDepth(item)))
        } else return 0
    }
};