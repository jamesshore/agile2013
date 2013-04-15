// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global desc, task, jake, fail, complete, directory, require, console, process */
(function() {
	"use strict";

	var lint = require("./build/util/lint_runner.js");

	desc("Lint and test");
	task("default", ["lint"], function() {
		console.log("\n\nOK");
	});

	desc("Lint everything");
	task("lint", [], function() {
		var passed = lint.validateFileList(filesToLint(), lintOptions(), {});
		if (!passed) fail("Lint failed");
	});

	function filesToLint() {
		var files = new jake.FileList();
//		files.include("src/*.js");
		files.include("Jakefile.js");
		return files.toArray();
	}

	function lintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: false,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			browser: true
		};
	}

}());