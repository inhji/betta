/* ---------------------------------
  ___            __    __          
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

    var getType = function (v) {
        return Object.prototype.toString.call(v)
            .replace(/\[object\s{1}|\]/g, "")
            .toLowerCase();
    };

    var compareToType = function (v, t) {
        var s = getType(v);
        return s === t || s.substr(0, 3) === t;
    };

    var betta = function(value, type) {      
        if (type) {
            return compareToType(value, type)
        }
        
        return getType(value);
    };

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