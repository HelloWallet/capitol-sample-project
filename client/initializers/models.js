"use strict";

var Ember = require("capitol-dome").Ember,
    models = require("../models/*_model.js", {hash: true}),
    Types = require("capitol-types"),
    _ = Types._;

Ember.Application.initializer({
	name: "registerModels",
	after: "store",
	initialize: function(container, App) {
		_.forIn(models, function(modelFn, key) {
            var model = modelFn.call(undefined, App);
			key = key.replace(/_model$/, "");
			App[Ember.String.classify(key)] = model;
		});
	}
});