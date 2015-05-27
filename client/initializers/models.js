"use strict";

var Ember = require("capitol-dome").Ember,
    models = require("../models/*_model.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerModels",
	after: "store",
	initialize: function(container, App) {
		_.forIn(models, function(model, key) {
			key = key.replace(/_model$/, "");
			App[Ember.String.classify(key)] = model;
			// container.register("model:" + Ember.String.dasherize(key), model);
			// App.register("model:" + Ember.String.dasherize(key), model);
			// container.lookup("model:" + Ember.String.dasherize(key));
		});
	}
});