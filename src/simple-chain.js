const CustomError = require("../extensions/custom-error");

const chainMaker = {
    checkInternal() {
        if (this['array'] == undefined) {
            this['array'] = []
        }
    },
    getLength() {
        this.checkInternal()

        return this.array.length
    },
    addLink(value) {
        this.checkInternal()
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
        this.checkInternal()

        if (!Number.isInteger(position) || position - 1 < 0 || position > this.array.length) throw new Error('No such possition')

        this.array.splice(position - 1, 1);

        return this
    },
    reverseChain() {
        this.checkInternal();

        this.array = this.array.reverse();

        return this;
    },
    finishChain() {
        this.checkInternal()
        if (this.array.length == 0) return ""

        let str = this.array.join("~~")

        this.array = []

        return str
    }
};

module.exports = chainMaker;