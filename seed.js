// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');
//
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');

var vaProfile =
{
  name: 'virginiachae',
  githunLink: 'https://github.com/virginiachae',
  githubProfileImage: 'https://avatars.githubusercontent.com/u/21117079?v=3',
  personalSiteLink: 'https://virginiachae.github.io/',
  currentCity: 'Alameda',
  family: ['dad', 'mom', 'brother']
}

db.Profile.create(vaProfile, function(err, succ){
  if (err){
  console.log("Error:", err);
  return;
  }
  console.log("Created new profile", succ)
})
