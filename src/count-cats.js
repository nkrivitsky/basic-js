const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
    if (!Array.isArray(array) || array.length == 0) return 0
    let count = 0
    array.forEach(element => {
        if (Array.isArray(element)) {
            count += countCats(element)
        } else {
            if (element == "^^") {
                count++;
            }
        }
    })
    return count
}