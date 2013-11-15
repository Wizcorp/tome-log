var assert = require('assert');
var Tome = require('tomes').Tome;
require('..');

describe('tome-log', function () {
	var testTome;

	it('conjure a tome.', function () {
		testTome = Tome.conjure({ banana: true });
		assert.ok(Tome.isTome(testTome));
	});

	it('console.log a tome.', function () {
		console.log(testTome);
		assert.ok(true);
	});
});

