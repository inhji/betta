var classes = require("./lib/classes");

var ß = function(value){
    var type = getType(value);
    var base = new classes.base(value);
    var typeClass = classes.base;
    
    switch(type) {
        case "string":
            typeClass = classes.string;
            break;
    }
    
    return new typeClass(value);
}