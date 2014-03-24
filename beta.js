var classes     = require('./lib/classes');
var Class       = require("./lib/inheritance");
var $           = require("./lib/helpers");

(function(){

    this.beta = function(value){
        var type = $.getType(value);
        var base = new classes.base(value);
        var typeClass = classes.base;
        
        switch(type) {
            case "string":
                typeClass = classes.string;
                break;
            case "number":
                typeClass = classes.number;
                break;
        }
        
        return new typeClass(value);
    };

    this.beta.extend = function (methods) {
        return Class.extend(methods || {});
    };

})();

module.exports = beta;
