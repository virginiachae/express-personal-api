var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
	githunLink: String,
	githubProfileImage: String,
	personalSiteLink: String,
	currentCity: String,
	family: Array
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
