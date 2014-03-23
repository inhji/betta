var Class = require("./inheritance");
var $ = require("./helpers");

// General functions - valid for all types
var betaBase = Class.extend({
    init: function(value){
        this.value = value;
        this.type = $.getType(value);
    },
    is: function(type){
        if (!type)
            return $.getType(this.value);
        return $.compareType(this.value, type);
    }
});

var betaString = betaBase.extend({
    init: function(value){ this._super(value); },
    trim: function(){
        return this.value.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    },
    isLowercase: function(value) {
      return this.is("string") && /^[a-z0-9]+$/.test(value);
    },
    isUppercase: function(item) {
      return this.is("string") && /^[A-Z0-9]+$/.test(value);
    }
});

module.exports = {
    base: betaBase,
    string: betaString
}