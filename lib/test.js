var chalk = require("chalk");

var test = {
	fail: function (msg) {
		console.log(chalk.red('  \u2716') + " " + msg);
	},
	success: function (msg) {
		console.log(chalk.green('  \u2714'.green) + " " + msg);
	},
	assert: function(actualValue, expectedValue, successMessage){
        successMessage = successMessage || expectedValue + " equals " + actualValue;
        if(actualValue === expectedValue){
            test.success("Success: " + successMessage);
        } else {
            test.fail("Failure: " + "Expected " + actualValue.toString().red + " to be " + expectedValue.toString().green);
        }
	},
	it: function (description, fn) {
		console.log(description.underline.yellow);
		fn();
	}
};
 module.exports = test;