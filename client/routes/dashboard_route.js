"use strict";

var Ember = require("capitol-dome").Ember;

module.exports = Ember.Route.extend({
    model: function() {
        return this.store.findAll("sample");
    }
});