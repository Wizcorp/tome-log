var Tome = require('tomes').Tome;

var log = console.log;
console.log = function () {
	try {
		for (var i = 0; i < arguments.length; i += 1) {
			arguments[i] = Tome.unTome(arguments[i]);
		}
	} catch (e) {
		
	}
	log.apply(console, arguments);
}