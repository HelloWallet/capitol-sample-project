"use strict";

/*jslint browser:true */

module.exports = function(App) {
    var SampleSchema = require("../../shared/schemas/sample_schema").model;
    var SampleModel = require("capitol-dome").ValidationBase.createModel.call(App, SampleSchema);
    return SampleModel.extend({

    });
};