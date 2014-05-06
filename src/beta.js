/* ---------------------------------
  ___.           __    __          
  \_ |__   _____/  |__/  |______   
   | __ \_/ __ \   __\   __\__  \  
   | \_\ \  ___/|  |  |  |  / __ \_
   |___  /\___  >__|  |__| (____  /
       \/     \/                \/ 

  ß("ßetta").is("string")
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

    var nativeToString  = Object.prototype.toString,
        nativeSlice     = Array.prototype.slice;

    /* ----- Helpers ----- */

    var callToString = function (v) {
            return nativeToString.call(v)
                .replace(/\[object\s{1}|\]/g, "")
                .toLowerCase();
        },

        compareToType = function (v, t) {
            var s = callToString(v);
            return s === t || s.substr(0, 3) === t;
        },
        
        isDefined = function(v) {
            var s = callToString(v);
            return s !== "null" && s !== "undefined";
        },

        isUndefined = function (v) {
            return !isDefined(v);
        },
        
        isSame = function(prev, current) {
            return prev && current;
        },
        
        isCurrent = function(prev, current) {
            return (prev === current)? current: false;
        },

        isEven = function (number) {
            return number % 2 === 0;
        },

        round = function(num, dec) {
            var multi = Math.pow(10, dec);
            return Math.round(num * multi) / multi;
        },
        
        trim = function(str) {
            return str.replace(/^\s+|\s+$/g, "")
        };

    /* ----- Object Class ----- */

    function ObjectClass(args) {
        var self = ObjectClass;

        self.values = args;
        
        self.is = function(type) {
            if (type) {                        
                return self.values
                    .map(function(value) {
                        return compareToType(value, type)
                    }).reduce(isSame);
            }
            
            return self.values
                .map(callToString)
                .reduce(isCurrent);
        };
        
        self.isDef = function() {
            return self.values
                .map(isDefined)
                .reduce(isSame);
        };

        self.isUndef = function () {
            return self.values
                .map(isUndefined)
                .reduce(isSame);
        }
        
        self.done = function() {
            return (self.values.length === 1)? self.values[0]: self.values;
        }
        
        return self;
    }

    /* ----- String ----- */

    function StringClass(args) {
        var self = ObjectClass(args);
        
        self.trim = function(str){
            self.values = self.values.map(trim);
            
            return self;
        }

        return self;
    }

    /* ----- Function ----- */
    
    function FunctionClass(args) {
        var self = ObjectClass(args);
        
        return self;
    }
    
    /* ----- Number ----- */
    
    function NumberClass(args){
        var self = ObjectClass(args);

        self.round = function (dec) {
            self.values = self.values.map(function (val) {
                return round(val, dec || 0);
            });
            return self;
        }
        
        return self;
    }

    /* ----- Wrapper ----- */

    function betta() {
        var args = nativeSlice.call(arguments),
            type;
        
        if(args.length === 0)
            return false;
            
        type = args
            .map(callToString)
            .reduce(isSame);
            
        if (type === false) {
            return false;
        }
            
        switch (type) {
            case "string":
                return StringClass(args);
            case "number":
                return NumberClass(args);
            case "array":
                return ArrayClass(args);
            case "function":
                return FunctionClass(args);
            default:
                return ObjectClass(args);
        }
        
    }

    /* ----- Exports ----- */

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = betta;
        }
        exports["\u00df"] = betta;
    } else {
        root["\u00df"] = betta;
    }

}(this));