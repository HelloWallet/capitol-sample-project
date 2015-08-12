"use strict";

var Ember = require("capitol-dome").Ember,
    components = require("../components/*_component.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerAppComponents",
	initialize: function(container, App) {
		_.forIn(components, function(component, key) {
			key = key.replace(/_component$/, "");
			container.register("component:" + Ember.String.dasherize(key), component);
		});
	}
});