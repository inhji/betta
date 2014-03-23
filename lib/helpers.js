var getSize = function (i) {
    switch (getType(i)) {
        case "[object Array]":
            return i.length;
        case "[object Number]":
            return i;
        case "[object Object]":
            return Object.keys(i).length;
        case "[object String]":
            return i.toString().length;
        case "[object Date]":
            return i.getTime();
        default:
            return i;
    }
};

var getType = function (value) {
    return callToString(value);
}

var compareType = function (value, type) {
    return (callToString(value) === type || callToString(value, 3) === type);
}
// Stringify everything! 
// Turns '[object Function]' into 'function'
var callToString = function(anything, length) {
    var ret = Object.prototype.toString.call(anything).replace("[object ", "").replace("]", "").toLowerCase();
    return (!length) ? ret : ret.substr(0, length);
};

module.exports = {
    getSize: getSize,
    getType: getType,
    compareType: compareType,
    callToString: callToString
};