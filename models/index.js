var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api" );

module.exports.Profile = require("./profile.js");
module.exports.Cake = require("./cake.js");
