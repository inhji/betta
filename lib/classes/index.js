(function(){

    // Module Loader
    var base    = require("./base");
    var string  = require("./string");
    var number  = require("./number");

    module.exports = {
        base:   base,
        string: string,
        number: number
    }

})();
