const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr === null || arr === []) return [];

    if (!Array.isArray(arr)) throw new Error('Not array');

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        switch (item) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (result.length !== 0 && arr[i - 2] !== '--discard-next') {
                    result.pop();
                }
                break;
            case '--double-next':
                if (i + 1 < arr.length) {
                    result.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (i - 1 > -1 && arr[i - 2] !== '--discard-next') {
                    result.push(arr[i - 1]);
                }
                break;
            default:
                result.push(item);
        }
    }

    return result;
};