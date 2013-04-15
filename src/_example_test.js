// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global mocha, describe, it, expect, example, beforeEach, afterEach, dump */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Example", function() {

		it("should pass", function() {
			expect(true).to.be(true);
		});

	});
}());