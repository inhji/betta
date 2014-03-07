var getString = function (i) {
    return toString.call(i);
};

var getSize = function (i) {
    switch (getString(i)) {
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

module.exports = {
    getSize: getSize,
    getString: getString
};