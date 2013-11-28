var Tome = require('tomes').Tome;

var log = console.log;
console.log = function () {
	for (var i = 0; i < arguments.length; i += 1) {
		try {
			arguments[i] = Tome.unTome(arguments[i]);
		} catch (e) {

		}
	}

	log.apply(console, arguments);
}