/* ---------------------------------
   _
  | |__   ___| |_ __ _ 
  | '_ \ / _ \ __/ _` |
  | |_) |  __/ || (_| |
  |_.__/ \___|\__\__,_|

  ß("ßeta").is("string")
  // => true

  ß("Super simple typechecking").is()
  // => "string"

  author: inhji
  license: wtfpl
  v0.0.1
 --------------------------------- */

(function (root) {
    "use strict";

    /* ----- Protos ----- */

    var nativeToString = Object.prototype.toString;

    /* ----- Helpers ----- */

    var callToString = function (v) {
            return nativeToString.call(v)
                .replace(/\[object\s{1}|\]/g, "")
                .toLowerCase();
        },

        compareToType = function (v, type) {
            var s = callToString(v);
            return s === type || s.substr(0, 3) === type;
        };

    /* ----- Base Class ----- */

    function BaseClass(args) {
        var self = this;

        self.values = args;
        
        self.is = function (type) {
            if (type) {
                return self.values
                    .map(function(value) {
                        return compareToType(value, type)
                    })
                    .reduce(function(a,b){
                        return a && b;
                    });
            }
            
            var result = self.values
                .map(function(value) {
                    return callToString(value);
                })
                .reduce(function(prev, current){            
                    return (prev === current)? current: false;
                });
            return result;
        };
    }

    /* ----- Wrapper ----- */

    function beta() {
        var args = Array.prototype.slice.call(arguments);
        return new BaseClass(args);
    }

    /* ----- Exports ----- */

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = beta;
        }
        exports.\u00df = beta;
    } else {
        root.\u00df = beta;
    }

}(this));