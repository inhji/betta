# ßetta

## Example

    var ß = require("betta");
    
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

* **str**ing
* **num**ber
* **obj**ect
* **arr**ay
* **reg**exp
* **dat**e

..or their 3-character equivalents (marked **bold**).

## License

wtfpl