var root = this;

function BaseClass(value){
    this.value = value;
}

BaseClass.prototype.is = function() {
    var args = Array.prototype.slice.call(arugments);
};

var callToString = function(value) {
    result = Object.prototype.toString.call(value)
        .replace(/\[object\s{1}|\]/g, "")
        .toLowerCase();
    return result;
};

var compareType = function(value, type) {
    return callToString(value) === type;
}

var selecta = function (args) {
    return new BaseClass(args);
}

var ß = function(){
    var args = Array.prototype.slice.call(arguments);
    
    if (args.length === 0) {
        return false;
    };

    return selecta(args);
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = ß;
    }
    exports.ß = ß;
} else {
    root.ß = ß;
}