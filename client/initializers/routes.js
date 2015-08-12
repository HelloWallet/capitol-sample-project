"use strict";

var Ember = require("capitol-dome").Ember,
    routes = require("../routes/*_route.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerAppRoutes",
	initialize: function(container, App) {
		_.forIn(routes, function(route, key) {
			key = key.replace(/_route$/, "");
			container.register("route:" + Ember.String.dasherize(key), route);
		});
	}
});