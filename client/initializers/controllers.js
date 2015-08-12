"use strict";

var Ember = require("capitol-dome").Ember,
    controllers = require("../controllers/*_controller.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerAppControllers",
	initialize: function(container, App) {
		_.forIn(controllers, function(controller, key) {
			key = key.replace(/_controller$/, "");
			container.register("controller:" + Ember.String.dasherize(key), controller);
		});
	}
});