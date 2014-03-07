function inner(value) {

    var callToString = function(anything) {
        var str = toString.call(anything);
        return str.replace("[object ", "").replace("]", "").toLowerCase();
    };
    
    return {
        is: function(what) {
            if (!what) return callToString(value);
            return (callToString(value) === what) ? true: false;
        }
    };

}

function ßeta(value) {
    return inner.call(null, value);
}

module.exports = ßeta;