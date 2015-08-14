"use strict";

var Ember = require("capitol-dome").Ember;

module.exports = Ember.Controller.extend({
    onModelChange: function() {
        var list = Ember.A();
        this.get("model").forEach(function(m) { list.pushObject(m); });
        this.set("list", list);
    }.observes("model"),
    actions: {
        save: function(record) {
            return record.save();
        },
        add: function() {
            var newNote = this.store.createRecord("sample");
            newNote.set("name", "test");
            newNote.set("message", "new note message");
            
            var list = Ember.A();
            this.get("list").forEach(function(m) { list.pushObject(m); });
            list.pushObject(newNote);
            this.set("list", list);
        }
    }
});