# ßeta 

## Syntax

    var ß = require("beta");
    ß("foo").is("string");
    // => true

	ß("ßeta").is("string")
	// => true
    
	ß("Super simple typechecking").is()

## Methods

Methods are based on type, so **"foo"** will only have string methods while an **object** has map functions, etc.

## Plugins

TODO

## BaseClass

The *BaseClass* function provides the following methods:

* is
* isDef
* isUndef

#### is()

**Parameter**: none

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

#### isDef()

**Parameter**: none

**Returns**: Boolean

Returns true if value is neither *undefined* nor *null*

Example:

    ß(void(0)).isDef(); 
    // => false


## 3rd-Party Licenses
Typechecking is build heavily on [robb](https://www.npmjs.org/package/robb). License included.