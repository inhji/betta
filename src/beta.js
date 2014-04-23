/* ***********************************
* ßeta                              *                            
* Transform and compare (and stuff) *
* v0.0.1                            *
* author: inhji                     *
*********************************** */

(function() {

    var root = this;

    var callToString = function (value) {
        return Object.prototype.toString.call(value)
            .replace(/\[object\s{1}|\]/g, "")
            .toLowerCase();
    };
    
    function beta(arg) {
        var self = this;
        
        self.value = arg;
        self.type = callToString(arg);
        
        self.is = function(type) {
            if (type) {
                return callToString(self.value) === type;
            } else {
                return callToString(self.value);
            }
        };
    }
    
    // Wrapper
    var \u00df = function(arg) {
        return new beta(arg);
    };
    
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = \u00df;
        }
        exports.\u00df = \u00df;
    } else {
        root.\u00df = \u00df;
    }

})();