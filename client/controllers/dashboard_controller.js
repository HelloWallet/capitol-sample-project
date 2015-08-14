"use strict";

var Ember = require("capitol-dome").Ember;

module.exports = Ember.Controller.extend({
    onModelChange: function() {
        var a = Ember.A();
        a.addObjects(this.get("model"));
        this.set("list", a);
    }.observes("model"),
    actions: {
        save: function(record) {
            return record.save();
        },
        add: function() {
            var newNote = this.store.createRecord("sample");
            newNote.set("name", "test");
            newNote.set("message", "new note message");
            this.get("list").pushObject(newNote);
        }
    }
});