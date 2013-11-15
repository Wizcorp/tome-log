var Tome = require('tomes').Tome;

var log = console.log;
console.log = function () {
	for (var i = 0; i < arguments.length; i += 1) {
		arguments[i] = Tome.isTome(arguments[i]) ? Tome.unTome(arguments[i]) : arguments[i];
	}
	log.apply(console, arguments);
}