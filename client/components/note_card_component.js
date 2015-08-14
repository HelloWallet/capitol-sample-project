var Ember = require("capitol-dome").Ember;

module.exports = Ember.Component.extend({
    classNames: ["panel", "panel-default"],
    header: {isHeader: true},
    footer: {isFooter: true},
    body:   {isBody: true}
});