const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.typeOfMachine = type;
    }

    encrypt(message, key) {
        this.checkValues(message, key);
        let result = "";
        let keyI = 0,
            messageI = 0;
        message = message.toString().toUpperCase();
        key = key.toString().toUpperCase().replace(/[^A-Z]/g, '');

        while (messageI < message.length) {
            keyI = 0;
            while (keyI < key.length && messageI < message.length) {
                if (message[messageI] >= 'A' && message[messageI] <= 'Z') {
                    let tmp = (key.charCodeAt(keyI) + message.charCodeAt(messageI)) % 26
                    result += String.fromCharCode(tmp + 65);
                    keyI++;
                } else {
                    result += message[messageI];
                }
                messageI++;
            }
        }
        return this.formatOutput(result);
    }
    decrypt(message, key) {
        this.checkValues(message, key);
        let result = "";
        let keyI = 0,
            messageI = 0;
        message = message.toString().toUpperCase();
        key = key.toString().toUpperCase().replace(/[^A-Z]/g, '');

        while (messageI < message.length) {
            keyI = 0;
            while (keyI < key.length && messageI < message.length) {
                if (message[messageI] >= 'A' && message[messageI] <= 'Z') {
                    let tmp = (-key.charCodeAt(keyI) + message.charCodeAt(messageI) + 26) % 26
                    result += String.fromCharCode(tmp + 65);
                    keyI++;
                } else {
                    result += message[messageI];
                }
                messageI++;
            }
        }
        return this.formatOutput(result);
    }
    checkValues(message, key) {
        if (message === undefined || message === null || key === undefined || key === null) throw new Error('Not implemented');
    }
    formatOutput(result) {
        return this.typeOfMachine ? result : result.split('').reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;