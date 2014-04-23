/* ***********************************
* ßeta                              *                            
* Transform and compare (and stuff) *
* v0.0.1                            *
* author: inhji                     *
*********************************** */

(function (root) {
    "use strict";

    var nativeToString = Object.prototype.toString,

        callToString = function (v) {
            return nativeToString.call(v)
                .replace(/\[object\s{1}|\]/g, "")
                .toLowerCase();
        },

        compareToType = function (v, type) {
            var s = callToString(v);
            return s === type || s.substr(0, 3) === type;
        };

    function BaseClass(arg) {
        var self = this;

        self.value = arg;
        self.type = callToString(arg);
        self.is = function (type) {
            if (type) { return compareToType(self.value, type); }
            return callToString(self.value);
        };
    }

    function wrapper(arg) {
        return new BaseClass(arg);
    }

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = wrapper;
        }
        exports.\u00df = wrapper;
    } else {
        root.\u00df = wrapper;
    }

}(this));