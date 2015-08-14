"use strict";

module.exports = function() {
    this.transition(
        this.hasClass("note-card"),
        this.includingInitialRender(),
        this.use("fade")
    );
    this.transition(
        this.childOf(".note-message"),
        this.use("toLeft")
    );
    this.transition(
        this.toRoute("about"),
        this.use("toLeft")
    );
    this.transition(
        this.toRoute("dashboard"),
        this.use("toRight")
    );
};