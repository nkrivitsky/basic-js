const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArray) {
    if (!Array.isArray(membersArray) || membersArray.length == 0) return ""

    let charsArray = []

    membersArray.forEach(item => {
        if (!(item == undefined || item == null || item == "" || !(typeof item === typeof 'string')) && item.toString().trim()[0].match("^[A-Za-z]$")) {
            charsArray.push(item.toString().trim()[0].toUpperCase())
        }
    })

    return charsArray.sort().join("")
};