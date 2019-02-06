const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/QA", {
    keepAlive: true
});

module.exports.Question = require("./questions");
module.exports.Answer = require("./answers");