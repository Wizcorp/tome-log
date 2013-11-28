var assert = require('assert');
var Tome = require('tomes').Tome;
require('..');

describe('tome-log unit tests', function () {
	var testTome;

	describe('tomes', function () {
		it('conjure a tome.', function () {
			testTome = Tome.conjure({ banana: true });
			assert.ok(Tome.isTome(testTome));
		});

		it('console.log a tome.', function () {
			console.log(testTome);
			assert.ok(true);
		});
	});

	describe('circular references', function () {
		function CircularReferences() {
			this.circularReference = this;
		}

		var circRefs = new CircularReferences();

		it ('console.log an object with circular references.', function () {
			console.log(circRefs);
			assert.ok(true);
		});
	});
});

