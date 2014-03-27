# ßeta
** Typechecking and Utilities with a jQuery-like syntax **

## Syntax
    var ß = require("beta");
    ß("foo").is("string");
    // => true

## Methods
Methods are based on type, so **"foo"** will only have string methods while an **object** has map functions, etc.

## "Constructor"
A call to `b(1)` determines the type and saves it together with the value. So you can do things like `ß(1).value` and `ß(2).type`. 

## TypeClasses

### BaseClass

#### is()

**Returns**: type:*String*

Example:

    ß(1).is(); 
    // => "number"

#### is(type)

**Parameter**: type: *String*

**Returns**: Boolean

Example: 

    ß(1).is("number");
    // => true

#### isUndef()

**Returns**: Boolean

Returns true if value is *undefined* or *null*

Example:

    ß(void(0)).isUndef(); 
    // => true

#### isDef()

**Returns**: Boolean

Returns true if value is neither *undefined* nor *null*

Example:

    ß({foo: "bar"}).isDef(); 
    // => true


## 3rd-Party Licenses
Typechecking is build heavily on [robb](https://www.npmjs.org/package/robb). License included.