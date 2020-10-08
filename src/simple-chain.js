const CustomError = require("../extensions/custom-error");

const chainMaker = {
    array: [],
    getLength() {
        return this.array.length
    },
    addLink(value) {
        let str = ''
        if (value === undefined) {
            str = ''
        } else if (value === null) {
            str = 'null'
        } else {
            str = value.toString()
        }
        this.array.push('( ' + str + ' )')

        return this
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position - 1 < 0 || position > this.array.length) {
            this.array = []
            throw new Error('No such possition')
        } else {
            this.array.splice(position - 1, 1);
            return this
        }
    },
    reverseChain() {
        this.array = this.array.reverse();

        return this;
    },
    finishChain() {
        if (this.array.length == 0) return ""
        let str = this.array.slice().join("~~")
        this.array = []

        return str
    }
};

module.exports = chainMaker;