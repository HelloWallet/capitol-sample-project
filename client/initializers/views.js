"use strict";

var Ember = require("capitol-dome").Ember,
    views = require("../views/*_view.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerAppViews",
	initialize: function(container, App) {
		_.forIn(views, function(view, key) {
			key = key.replace(/_view$/, "");
			container.register("view:" + Ember.String.dasherize(key), view);
		});
	}
});