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

var getType = function (v) {
    return Object.prototype.toString.call(v)
        .replace(/\[object\s{1}|\]/g, "")
        .toLowerCase();
};

var compareToType = function (v, t) {
    var s = getType(v);
    return s === t || s.substr(0, 3) === t;
};

module.exports = function(value, type) {
    return (type)?
        compareToType(value, type):
        getType(value);
};
