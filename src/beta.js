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
        };

    /* ----- Base Class ----- */

    function BaseClass(args) {
        var self = this;

        self.values = args;
        
        self.is = function(type) {
            if (type) {                        
                return self.values
                    .map(function(value) {
                        return compareToType(value, type)
                    })
                    .reduce(isSame);
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
    }
    
    /* ----- Function ----- */
    
    function Function(args) {
        var self = Base(args);
        
        return self;
    }
    
    /* ----- Number ----- */
    
    function Number(args){
        var self = Base(args);
        
        self.isEven = function(){
            return self.values.every(isEven);
        }
        
        self.isOdd = function() {
            return !self.values.every(isEven);
        }
        
        return self;
    }

    /* ----- Wrapper ----- */

    function betta() {
        var args = nativeSlice.call(arguments);
        
        if(args.length === 0)
            return false;
        
        return new BaseClass(args);
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