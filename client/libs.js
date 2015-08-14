"use strict";
/* jshint browser: true */
require("capitol-dome/lib/libs");
require("capitol-dome").init({
    Types: require("capitol-types")
});
require("capitol-dome/lib/ember")(require("capitol-dome"));

window.require = function(x) {
	var exports = {
		"capitol-dome": require("capitol-dome"),
		"capitol-types": require("capitol-types")
	};
	return exports[x];
};