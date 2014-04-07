var Embryo = require("embryo");

var BaseClass = Embryo.extend({
    "_type": "Base",
    
    properties: {
        value: null,
        type: null
    },
    
    init: function(value) {
        this.value = value;
    },
    
    is: function() {
        return callToString(this.value);
    },
    "is|1": function(type){
        return compareType(this.value, type);
    }
});

var callToString = function(value) {
    result = Object.prototype.toString.call(value)
        .replace(/\[object\s{1}|\]/g, "")
        .toLowerCase();
    return result;
}

var compareType = function(value, type) {
    return callToString(value) === type;
}

var beta = function(){};

module.exports = beta;