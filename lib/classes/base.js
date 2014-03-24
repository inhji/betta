var Class   = require("../inheritance");
var $       = require("../helpers");

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
    },
    isUndef: function() {
        return this.is("null") || this.is("undefined"); 
    },
    isDef: function () {
        return !this.is("null") || !this.is("undefined"); 
    }

});

module.exports = betaBase;