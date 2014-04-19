      /* ***********************************
       * ßeta                              *                            
       * Transform and compare (and stuff) *
       * v0.0.1                            *
       * author: inhji                     *
       *********************************** */

   (function () {
       var root = this;

       /* ----------- Native ----------- */
       
       var nativeIndexOf       = Array.prototype.indexOf,
           nativeLastIndexOf   = Array.prototype.lastIndexOf,
           nativeEvery         = Array.prototype.every,
           nativeSome          = Array.prototype.some,
           nativeForEach       = Array.prototype.forEach,
           nativeMap           = Array.prototype.map,
           nativeFilter        = Array.prototype.filter,
           nativeReduce        = Array.prototype.reduce,
           nativeReduceRight   = Array.prototype.reduceRight;

       /* ----------- dateFormat ----------- */

       /*
        * Date Format 1.2.3
        * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
        * MIT license
        *
        * Includes enhancements by Scott Trenda <scott.trenda.net>
        * and Kris Kowal <cixar.com/~kris.kowal/>
        *
        * Accepts a date, a mask, or a date and a mask.
        * Returns a formatted version of the given date.
        * The date defaults to the current date/time.
        * The mask defaults to dateFormat.masks.default.
        */

       var dateFormat = function () {
           var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
               timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
               timezoneClip = /[^-+\dA-Z]/g,
               pad = function (val, len) {
                   val = String(val);
                   len = len || 2;
                   while (val.length < len) val = "0" + val;
                   return val;
               };

           // Regexes and supporting functions are cached through closure
           return function (date, mask, utc) {
               var dF = dateFormat;

               // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
               if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                   mask = date;
                   date = undefined;
               }

               // Passing date through Date applies Date.parse, if necessary
               date = date ? new Date(date) : new Date;
               if (isNaN(date)) throw SyntaxError("invalid date");

               mask = String(dF.masks[mask] || mask || dF.masks["default"]);

               // Allow setting the utc argument via the mask
               if (mask.slice(0, 4) == "UTC:") {
                   mask = mask.slice(4);
                   utc = true;
               }

               var _ = utc ? "getUTC" : "get",
                   d = date[_ + "Date"](),
                   D = date[_ + "Day"](),
                   m = date[_ + "Month"](),
                   y = date[_ + "FullYear"](),
                   H = date[_ + "Hours"](),
                   M = date[_ + "Minutes"](),
                   s = date[_ + "Seconds"](),
                   L = date[_ + "Milliseconds"](),
                   o = utc ? 0 : date.getTimezoneOffset(),
                   flags = {
                       d:    d,
                       dd:   pad(d),
                       ddd:  dF.i18n.dayNames[D],
                       dddd: dF.i18n.dayNames[D + 7],
                       m:    m + 1,
                       mm:   pad(m + 1),
                       mmm:  dF.i18n.monthNames[m],
                       mmmm: dF.i18n.monthNames[m + 12],
                       yy:   String(y).slice(2),
                       yyyy: y,
                       h:    H % 12 || 12,
                       hh:   pad(H % 12 || 12),
                       H:    H,
                       HH:   pad(H),
                       M:    M,
                       MM:   pad(M),
                       s:    s,
                       ss:   pad(s),
                       l:    pad(L, 3),
                       L:    pad(L > 99 ? Math.round(L / 10) : L),
                       t:    H < 12 ? "a"  : "p",
                       tt:   H < 12 ? "am" : "pm",
                       T:    H < 12 ? "A"  : "P",
                       TT:   H < 12 ? "AM" : "PM",
                       Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                       o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                       S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                   };

               return mask.replace(token, function ($0) {
                   return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
               });
           };
       }();

       // Some common format strings
       dateFormat.masks = {
           "default":      "ddd mmm dd yyyy HH:MM:ss",
           shortDate:      "m/d/yy",
           mediumDate:     "mmm d, yyyy",
           longDate:       "mmmm d, yyyy",
           fullDate:       "dddd, mmmm d, yyyy",
           shortTime:      "h:MM TT",
           mediumTime:     "h:MM:ss TT",
           longTime:       "h:MM:ss TT Z",
           isoDate:        "yyyy-mm-dd",
           isoTime:        "HH:MM:ss",
           isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
           isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
       };

       // Internationalization strings
       dateFormat.i18n = {
           dayNames: [
               "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
               "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
           ],
           monthNames: [
               "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
               "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
           ]
       };
       
       /* ----------- Conversion ----------- */

       var toString = function (v) {
           var type = s(v);
           console.log(v, type);

           if (type === "string") { return v; };
           if (type === "number") { return v.toString(); };
           if (type === "array") { return v.toString(); };
           if (type === "object") { return JSON.stringify(v) };
           if(v.hasOwnProperty("toString"))
               return v.toString();
           return "";
       }

       /* ----------- Helpers ----------- */

       var callToString = function (value) {
           return Object.prototype.toString.call(value)
               .replace(/\[object\s{1}|\]/g, "")
               .toLowerCase();
       }
       var s = callToString;
       
       var compareType = function(value, type) {
           return callToString(value) === type;
       }
       
       var setSuper = function (thisClass) {
           Object.defineProperty(thisClass, "super", {
               enumerable: false,
               configurable: false,
               writable: false,
               value: BaseClass
           });
       }

       /* ----------- Base Class Methods ----------- */
       
       function BaseClass(value) {    
           this.value = value;
           this.type = callToString(value);
       }
       
       BaseClass.prototype.toString = function() {
           return toString(this.value);
       }

       BaseClass.prototype.is = function (type) {
           var val = this.value;

           // Compare type to this.value
           if (type && callToString(type) === "string") {
               return compareType(val, type);
           } else {
               return callToString(val);
           }
       }
       
       BaseClass.prototype.done = function() {
           return this.value;
       }
       
       /* ----------- Function Class ----------- */
       
       function FunctionClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }
       
       FunctionClass.prototype = new BaseClass();
       FunctionClass.prototype.constructor = FunctionClass;
       
       /* ----------- String Class ----------- */
       
       function StringClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }
       
       StringClass.prototype = new BaseClass();
       StringClass.prototype.constructor = StringClass;
       
       StringClass.prototype.capitalize = function() {
           this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
           return this;
       }

       StringClass.prototype.trim = function() {
           this.value = this.ltrim().rtrim().value;
           return this;
       }

       StringClass.prototype.ltrim = function () {
           this.value = this.value.replace(/(^\s+)/g, "");
           return this;
       }

       StringClass.prototype.rtrim = function () {
           this.value = this.value.replace(/(\s+$)/g, "");
           return this;
       }   

       StringClass.prototype.up = function () {
           this.value = this.value.toUpperCase();
           return this;
       }
       
       StringClass.prototype.down = function () {
           this.value = this.value.toLowerCase();
           return this;
       }
       
       /* ----------- Number Class ----------- */
       
       function NumberClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }
       
       NumberClass.prototype = new BaseClass();
       NumberClass.prototype.constructor = NumberClass;
       
       NumberClass.prototype.greaterThan = function(comp) {
           if (callToString(comp) !== "number")
               throw new Error("comparator must be a number!");
           
           return this.value > comp;
       }
       NumberClass.prototype.gt = NumberClass.prototype.greaterThan;
       
       NumberClass.prototype.lowerThan = function(comp) {
           if (callToString(comp) !== "number")
               throw new Error("comparator must be a number!");
               
           return this.value < comp;
       }
       NumberClass.prototype.lt = NumberClass.prototype.lowerThan;
       
       /* ----------- Array Class ----------- */
       
       function ArrayClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }
       
       ArrayClass.prototype = new BaseClass();
       ArrayClass.prototype.constructor = ArrayClass;
       
       ArrayClass.prototype.first = function(count) {
           var result = this.value.slice(0, count || 1);
           this.value = (result.length === 1)? result[0]: result;

           return this;
       }
       
       ArrayClass.prototype.last = function(count) {
           var result = this.value.slice(-count || this.value.length);
           this.value = (result.length === 1)? result[0]: result;

           return this;
       }

       ArrayClass.prototype.each = function () {
           // TODO
       }

       /* ----------- Date Class ----------- */
       
       function DateClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }

       DateClass.prototype = new BaseClass();
       DateClass.prototype.constructor = DateClass;

       DateClass.prototype.format = function (mask) {
           this.value = dateFormat(this.value, mask);
           return this;
       }

       /* ----------- Object Class ----------- */

       function ObjectClass(value) {
           // Call BaseClass constructor
           setSuper(this);
           this.super(value);
       }
       
       ObjectClass.prototype = new BaseClass();
       ObjectClass.prototype.constructor = ObjectClass;

       ObjectClass.prototype.toString = function() {
           this.value = JSON.stringify(this.value);
           return this;
       }
       
       ObjectClass.prototype.keys = function() {
           this.value = Object.keys(this.value);
           return this;
       }
       
       ObjectClass.prototype.values = function() {
           var result = [];
           var keys = this.keys();
           var obj = this.value;

           var traverseObject = function (obj) {
               var keys = value(obj).keys();
               console.log(keys);
               
               for (var i = keys.length - 1; i >= 0; i--) {
                   var k = keys[i];
                   if(value(obj[k]).is("object")) {
                       traverseObject(obj[k]);
                   } else {
                       result.push(obj[k]);
                   }
               }
               
               return result;
           }
           
           this.value = traverseObject(obj);
           return this;
       }
       
       /* ----------- Selecta ----------- */

       var selecta = function (args) {
           var Class;

           switch (callToString(args)) {
               case "function":
                   Class = FunctionClass;
                   break;
               case "string":
                   Class = StringClass;
                   break;
               case "number":
                   Class = NumberClass;
                   break;
               case "array":
                   Class = ArrayClass;
                   break;    
               case "object":
                   Class = ObjectClass;
                   break;
               case "date":
                   Class = DateClass;
                   break;
               default:
                   Class = BaseClass;
           }
           // Save global reference to selected class instance
           return new Class(args);
       };
       
       /* ----------- Main Function ----------- */

       var ß = function(){
           var args = Array.prototype.slice.call(arguments);

           if (args.length === 0)
               return false;
           if (args.length === 1)
               return selecta(args[0]);

           return selecta(args);
       };
       
       /* ----------- Exports ----------- */

       if (typeof exports !== 'undefined') {
           if (typeof module !== 'undefined' && module.exports) {
               exports = module.exports = ß;
           }
           exports.ß = ß;
       } else {
           root.ß = ß;
       }
       
   })();