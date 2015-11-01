"use strict";

/*jslint browser:true */

module.exports = function(App) {
    // var SampleSchema = require("../../shared/schemas/sample_schema").model;
    // var SampleModel = require("capitol-dome").ValidationBase.createModel.call(App, SampleSchema);
    // return SampleModel.extend({
    //
    // });
    //
    App.register("model:child-fragment", DS.Wrap.ModelFragment.extend({
        dummy: DS.attr('string'),
        dummy2: DS.attr('string')
    }));

    //
    //
    return DS.Model.extend({
        name: DS.attr('string'),
        message: DS.attr('string'),
        url: DS.attr('string'),
        child: DS.hasOneFragment('child-fragment', {
            defaultValue: {
                dummy: "start1",
                dummy2: "start2"
            }
        })
    })
};
