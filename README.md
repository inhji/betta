# ßetta

## Syntax

    var ß = require("beta");

	ß("ßeta").is("str")
	// => true
    
	ß("Super simple typechecking").is()
    // => "string"

    ß(1337).is("number")
    // => true

## Methods

Methods are based on type, so **"foo"** will only have string methods while an **object** has map functions, etc.

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

> All types have a short form, so instead of *"string"* you also can type *"str"* 

#### isDef()

**Parameter**: none

**Returns**: Boolean

Returns true if value is neither *undefined* nor *null*

Example:

    ß(void(0)).isDef(); 
    // => false
