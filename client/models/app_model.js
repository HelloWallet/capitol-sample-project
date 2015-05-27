"use strict";

/*jslint browser:true */

var AppSchema = require("@shared/schemas/app_schema").model;
var AppModel = require("capitol-dome").ValidationBase.createModel(AppSchema);
module.exports = AppModel.extend({});