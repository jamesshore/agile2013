// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
(function() {
	"use strict";

	desc("This is the default task");
	task("default", ["example"], function() {
		console.log("Hi, I'm the default");
	});

	desc("This is an example task");
	task("example", function() {
		console.log("Hello, world!");
	});

}());