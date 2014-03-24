var betaBase = require("./base");

// Number Class
var betaNumber = betaBase.extend({
    round: function (decimals) {
        var exp = Math.pow(10, decimals || 2);
        return Math.round(this.value * exp) / exp;
    },
    isEven: function () {
        return (this.value & 1) === 0;
    },
    isOdd: function () {
        return !this.isEven();
    },
    isNegative: function () {
        return /^-\d+$/.test(this.value);
    },
    isPostive: function () {
        return /^\+?\d+$/.test(this.value);
    }
});

module.exports = betaNumber;