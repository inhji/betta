# ßetta

__Super Simple Typechecking__

---

## Install

through npm:

	npm install betta

## Require

	var ß = require("betta");
		
## Usage
    
Get the type:

	ß("ßeta")
	// => "string"
    
Check the type:
    
	ß("Super simple typechecking", "str")
    // => true

    ß(42, "number")
    // => true
    
## Types

These types can be checked for:

string | str

number | num

object | obj

array | arr

regexp | reg

date | dat


## License

wtfpl
